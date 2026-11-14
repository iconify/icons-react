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
		"content": `<style>.d39d2ub4b {
  d: path("M9 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M19 2q0 2.5 2.5 2.5Q19 4.5 19 7q0-2.5-2.5-2.5Q19 4.5 19 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mkmcw_l-w {
  d: path("M2.5 11.75a2 2 0 0 1 2-2H7L8.5 7.5h5L15 9.75h4.5a2 2 0 0 1 2 2v7.75a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="mkmcw_l-w"/><path class="d39d2ub4b"/></g>`,
		"fallback": "uix:ai-camera",
	});
}

export default Component;
