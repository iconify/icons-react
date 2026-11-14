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
		"content": `<style>.v16_avb3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20h17m-17 0L14 6m-3.5 14a7 7 0 0 0-2.25-4.75");
}
</style><path class="v16_avb3f"/>`,
		"fallback": "uix-sharp:angle-types",
	});
}

export default Component;
