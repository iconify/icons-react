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
		"content": `<style>.r88x3ft9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.013 8.487l3.75-3.75a1.75 1.75 0 0 1 2.474 0l3.75 3.75a1.75 1.75 0 0 1 .513 1.238v9.525A1.75 1.75 0 0 1 11.75 21h-7.5a1.75 1.75 0 0 1-1.75-1.75V9.725a1.75 1.75 0 0 1 .513-1.238M2.5 14.5h11m5-11v17M15.75 6.25L18.5 3.5l2.75 2.75");
}
</style><path class="r88x3ft9c"/>`,
		"fallback": "uix:floor-up",
	});
}

export default Component;
