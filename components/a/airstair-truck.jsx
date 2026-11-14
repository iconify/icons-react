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
		"content": `<style>.bt-dvlb0h {
  d: path("M21.5 17.5v-3H9v-4H5l-2.5 3v4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvnak432r {
  d: path("M11.5 14.5V12H14V9.5h2.5V7H19V4.5h2.5v10m-18 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="bt-dvlb0h"/><path class="wvnak432r"/></g>`,
		"fallback": "uix:airstair-truck",
	});
}

export default Component;
