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

.i-3hmub1m {
  d: path("M5 11v7a3.5 3.5 0 0 0 3.5 3.5h7A3.5 3.5 0 0 0 19 18v-7");
}

.kisfgflwq {
  d: path("M10 6V4.5a2 2 0 0 1 4 0V6M9.25 6h5.5A1.25 1.25 0 0 1 16 7.25a1.25 1.25 0 0 1-1.25 1.25h-5.5A1.25 1.25 0 0 1 8 7.25A1.25 1.25 0 0 1 9.25 6M8.5 8.5V16a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8.5");
}
</style><g class="hntgybcog"><path class="kisfgflwq"/><path class="i-3hmub1m"/></g>`,
		"fallback": "uix:baby-bottle-warmer",
	});
}

export default Component;
