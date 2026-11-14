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

.l56-59b8p {
  d: path("M3.5 17C8 17 10 13.5 13 13.5s4.5-2.5 7.5-2.5m-17 2C8 13 10 9.5 13 9.5S17.5 7 20.5 7m-17 2C8 9 10 5.5 13 5.5S17.5 3 20.5 3");
}
</style><g class="hntgybcog"><path class="j_q_y1bdx"/><path class="l56-59b8p"/></g>`,
		"fallback": "uix:cumulative-flow",
	});
}

export default Component;
