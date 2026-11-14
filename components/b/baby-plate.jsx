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
		"content": `<style>.won6j-zpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m0 0h15m-7.5 0v7.5M19 7a1.5 2.5 0 1 0 3 0a1.5 2.5 0 1 0-3 0m1.5 2.5V20");
}
</style><path class="won6j-zpn"/>`,
		"fallback": "uix:baby-plate",
	});
}

export default Component;
