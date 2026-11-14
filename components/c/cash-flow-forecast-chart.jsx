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
		"content": `<style>.e3b_kqbif {
  d: path("m7 16l3.5-4.5l3 2.5m3-3.5L20 6m-5 6.25h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="e3b_kqbif"/></g>`,
		"fallback": "uix:cash-flow-forecast-chart",
	});
}

export default Component;
