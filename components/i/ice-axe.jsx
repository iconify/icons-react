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
		"content": `<style>.qm8_isbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5H15c3 0 5 2.5 5 6m-9-6V18m-1.5-.5h3l-1.5 3Z");
}
</style><path class="qm8_isbzl"/>`,
		"fallback": "uix-sharp:ice-axe",
	});
}

export default Component;
