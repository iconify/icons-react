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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.r7ntaytum {
  d: path("M8 8.5c2-.5 3.75 1 3.5 3c-.25 1.5.5 3-1 3.75S7.5 15.5 6 15s-1.75-2.5-1.25-4S6 8.75 8 8.5M8 12h.01m7.74-6za1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V7.5a1.5 1.5 0 0 1 1.5-1.5m0 7za1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V14.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="r7ntaytum"/></g>`,
		"fallback": "uix:breakfast-plate",
	});
}

export default Component;
