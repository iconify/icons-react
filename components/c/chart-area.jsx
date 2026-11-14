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

.vgd-tsbyq {
  d: path("M7 15v-2.319a1.5 1.5 0 0 1 .512-1.129l2.51-2.197a1.5 1.5 0 0 1 1.964-.01l1.336 1.145a1.5 1.5 0 0 0 2.147-.202L16.5 9a1.123 1.123 0 0 1 2 .702V15a1.5 1.5 0 0 1-1.5 1.5H8.5A1.5 1.5 0 0 1 7 15");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="vgd-tsbyq"/></g>`,
		"fallback": "uix:chart-area",
	});
}

export default Component;
