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

.qe2-lv4xc {
  d: path("m3.943 4.623l2-.8A1.5 1.5 0 0 1 8 5.216v11.068a1.5 1.5 0 0 1-2.057 1.393l-2-.8A1.5 1.5 0 0 1 3 15.484V6.016a1.5 1.5 0 0 1 .943-1.393m14.114-.8l2 .8A1.5 1.5 0 0 1 21 6.016v9.468a1.5 1.5 0 0 1-.943 1.393l-2 .8A1.5 1.5 0 0 1 16 16.284V5.216a1.5 1.5 0 0 1 2.057-1.393M2.5 21h19M8 9.5h8");
}

.uc5ms9bfa {
  d: path("M9.5 3h5A1.5 1.5 0 0 1 16 4.5V17a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 17V4.5A1.5 1.5 0 0 1 9.5 3");
}
</style><g class="hntgybcog"><path class="uc5ms9bfa"/><path class="qe2-lv4xc"/></g>`,
		"fallback": "uix:bay-window",
	});
}

export default Component;
