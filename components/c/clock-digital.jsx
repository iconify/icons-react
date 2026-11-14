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
		"content": `<style>.h2mn7gbvv {
  d: path("M6.875 5.5h10.25A4.375 4.375 0 0 1 21.5 9.875v3.75A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.75A4.375 4.375 0 0 1 6.875 5.5M5.5 18v2m13-2v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4p_99bds {
  d: path("M7 8.25h.5A1.75 1.75 0 0 1 9.25 10v3.5a1.75 1.75 0 0 1-1.75 1.75H7a1.75 1.75 0 0 1-1.75-1.75V10A1.75 1.75 0 0 1 7 8.25m9.5 0h.5A1.75 1.75 0 0 1 18.75 10v3.5A1.75 1.75 0 0 1 17 15.25h-.5a1.75 1.75 0 0 1-1.75-1.75V10a1.75 1.75 0 0 1 1.75-1.75M12 10h.01M12 13.5h.01");
}
</style><g class="hntgybcog"><path class="h2mn7gbvv"/><path class="w4p_99bds"/></g>`,
		"fallback": "uix:clock-digital",
	});
}

export default Component;
