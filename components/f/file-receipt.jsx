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
		"content": `<style>.fhv_rob_i {
  d: path("M7 2.5h6.5l6 6v13L17 20.25l-2.5 1.25l-2.5-1.25l-2.5 1.25L7 20.25L4.5 21.5V5A2.5 2.5 0 0 1 7 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qg_dtcc0b {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-11 3h7m-7 3.5H13");
}
</style><g class="hntgybcog"><path class="fhv_rob_i"/><path class="qg_dtcc0b"/></g>`,
		"fallback": "uix:file-receipt",
	});
}

export default Component;
