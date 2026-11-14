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

.ohd0sccwi {
  d: path("M7.375 4.5h9.25A4.375 4.375 0 0 1 21 8.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125v-8.25A4.375 4.375 0 0 1 7.375 4.5M8 2.5v4m8-4v4m-13 3h18");
}

.pa_e2wbay {
  fill: currentColor;
  d: path("M8 14h8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 16 17H8a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 14");
}
</style><g class="hntgybcog"><path class="ohd0sccwi"/><path class="pa_e2wbay"/></g>`,
		"fallback": "uix:calendar-busy",
	});
}

export default Component;
