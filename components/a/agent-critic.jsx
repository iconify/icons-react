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
		"content": `<style>.exfkhnmwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-3 13v-1c0-3 3.25-5 7.5-5q2.25 0 3.75.75m0 2.75l2 2L21 15.75");
}
</style><path class="exfkhnmwk"/>`,
		"fallback": "uix:agent-critic",
	});
}

export default Component;
