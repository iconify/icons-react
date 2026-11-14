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

.v174gbbnh {
  d: path("M7 16c4 0 8-3 11.5-9");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="v174gbbnh"/></g>`,
		"fallback": "uix:baby-growth-chart",
	});
}

export default Component;
