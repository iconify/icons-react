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
		"content": `<style>.qv2od9b_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 8.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 21c0-4 3-6.5 7-6.5c1.539 0 2.933.387 4.054 1.075M15 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 5.75c.75-.35 1.6-.5 2.5-.5c2.5 0 4 1.75 4 3.75M18 15v6m-3-3h6");
}
</style><path class="qv2od9b_q"/>`,
		"fallback": "uix:group-invite",
	});
}

export default Component;
