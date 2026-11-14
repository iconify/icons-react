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

.t8lbghxqq {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V7A3.5 3.5 0 0 1 6 3.5m1 13V21m10-4.5V21M8 7v6m2.75 0l1.5-6");
}

.uqmys-bbz {
  d: path("M16.5 7zA1.5 1.5 0 0 1 18 8.5v3a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 16.5 7");
}
</style><g class="hntgybcog"><path class="t8lbghxqq"/><path class="uqmys-bbz"/></g>`,
		"fallback": "uix:cricket-scoreboard",
	});
}

export default Component;
