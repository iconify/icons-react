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
		"content": `<style>.siezwabux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v11a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 17V6a3.5 3.5 0 0 1 3.5-3.5M5 8.5h14m-14 6h14m-9-9h4m-4 6h4m-4 6h4");
}
</style><path class="siezwabux"/>`,
		"fallback": "uix:filing-cabinet-wood",
	});
}

export default Component;
