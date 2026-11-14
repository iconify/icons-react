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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.m0tx_6fqw {
  d: path("M6.25 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4.5-5.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9.5 14l2-2.25m3-2.25l2.75-1.25");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="m0tx_6fqw"/></g>`,
		"fallback": "uix:analytics-path",
	});
}

export default Component;
