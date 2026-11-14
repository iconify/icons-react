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
		"content": `<style>.axbpdz1hl {
  d: path("M3.5 16h17L19 21.5H5Zm.25 0v-4.25l4-4l4 4V16");
}

.gecyqubeq {
  d: path("M6.5 16v-2.25a1.25 1.25 0 0 1 2.5 0V16m5.5-3.5a3 3 0 0 1 6 0Zm3 0V16M18 2.75q0 2 2 2q-2 0-2 2q0-2-2-2q2 0 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="axbpdz1hl"/><path class="gecyqubeq"/></g>`,
		"fallback": "uix:fairy-garden",
	});
}

export default Component;
