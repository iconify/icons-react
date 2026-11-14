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

.nv-yovrvp {
  d: path("M7 15v-.573a1.5 1.5 0 0 1 .829-1.342l2.549-1.274a1.5 1.5 0 0 1 1.261-.037l2.064.884a1.5 1.5 0 0 0 1.491-.178l1.306-.98a1.25 1.25 0 0 1 2 1V15a1.5 1.5 0 0 1-1.5 1.5H8.5A1.5 1.5 0 0 1 7 15m0-5.5l4-3l3.5 2l4-4");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="nv-yovrvp"/></g>`,
		"fallback": "uix:chart-area-stacked",
	});
}

export default Component;
