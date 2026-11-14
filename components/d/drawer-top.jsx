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
		"content": `<style>.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t5aoeccqt {
  d: path("M8.5 3.5V6A1.5 1.5 0 0 0 10 7.5h4A1.5 1.5 0 0 0 15.5 6V3.5");
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="t5aoeccqt"/></g>`,
		"fallback": "uix:drawer-top",
	});
}

export default Component;
