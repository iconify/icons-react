import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.psmykka1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 11H2.5v10.5h19V11H15v8H9Zm3-5v10M7.5 3h9v3h-9Z");
}
</style><path class="psmykka1p"/>`,
		"fallback": "uix-sharp:depth-gauge",
	});
}

export default Component;
