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

.uzj-qbbvk {
  d: path("M9.75 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.5 16.5a3.5 3.5 0 0 1 7 0M2.5 8H5m-2.5 4H5m-2.5 4H5");
}

.xxrh1kbuw {
  d: path("M9.375 3h5.25A4.375 4.375 0 0 1 19 7.375v9.25A4.375 4.375 0 0 1 14.625 21h-5.25A4.375 4.375 0 0 1 5 16.625v-9.25A4.375 4.375 0 0 1 9.375 3");
}
</style><g class="hntgybcog"><path class="xxrh1kbuw"/><path class="uzj-qbbvk"/></g>`,
		"fallback": "uix:employee-directory",
	});
}

export default Component;
