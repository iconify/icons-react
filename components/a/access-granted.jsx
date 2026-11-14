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
		"content": `<style>.m14xlpwio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21V4.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v7.75M2.5 21h9.75M15 11.5h.01m-.26 6.5l2 2L21 15.75");
}
</style><path class="m14xlpwio"/>`,
		"fallback": "uix:access-granted",
	});
}

export default Component;
