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
		"content": `<style>.r1rl54bvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 21v-8.5L5 9c-.5-1 .5-2 1.5-1.5l2 2.5V4.5c0-1 1.5-1 1.5 0V9V3.5c0-1 1.75-1 1.75 0V9V4c0-1 1.75-1 1.75 0v5.5V6c0-1 1.75-1 1.75 0v8c0 2.5-1.25 3.5-1.25 5v2Z");
}
</style><path class="r1rl54bvt"/>`,
		"fallback": "uix:hand-form",
	});
}

export default Component;
