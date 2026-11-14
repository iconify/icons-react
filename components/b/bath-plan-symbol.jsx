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
		"content": `<style>.gs49b8b5j {
  d: path("M6.875 5.5h10.25A4.375 4.375 0 0 1 21.5 9.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 14.125v-4.25A4.375 4.375 0 0 1 6.875 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t_22xsbjg {
  d: path("M9 8.25h6A3.75 3.75 0 0 1 18.75 12A3.75 3.75 0 0 1 15 15.75H9A3.75 3.75 0 0 1 5.25 12A3.75 3.75 0 0 1 9 8.25M15.5 12h.01");
}
</style><g class="hntgybcog"><path class="gs49b8b5j"/><path class="t_22xsbjg"/></g>`,
		"fallback": "uix:bath-plan-symbol",
	});
}

export default Component;
