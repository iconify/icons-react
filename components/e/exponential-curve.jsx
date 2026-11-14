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

.o8e348r8l {
  d: path("M6.5 19C12 19 16 16 19 5.5");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="o8e348r8l"/></g>`,
		"fallback": "uix:exponential-curve",
	});
}

export default Component;
