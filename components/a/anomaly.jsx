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

.pdga88boe {
  d: path("m6.5 16l3-2l2.5 1l2.5-7l2.5 7l3-2m-5.5-8.75h.01");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="pdga88boe"/></g>`,
		"fallback": "uix:anomaly",
	});
}

export default Component;
