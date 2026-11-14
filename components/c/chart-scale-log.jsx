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

.xknbjdb-u {
  d: path("M6.5 18C7 9 11 6.5 19.5 5.5M8 20.5v-2m4.5 2v-2m3.5 2v-2");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="xknbjdb-u"/></g>`,
		"fallback": "uix:chart-scale-log",
	});
}

export default Component;
