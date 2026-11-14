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

.i8qd6uten {
  d: path("M6 9h9a3.5 3.5 0 0 1 3.5 3.5V16a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-3.5A3.5 3.5 0 0 1 6 9");
}

.yw3w9iklc {
  d: path("M5.5 9V7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-1M6 14.25h4.5m4.5 0h.01");
}
</style><g class="hntgybcog"><path class="i8qd6uten"/><path class="yw3w9iklc"/></g>`,
		"fallback": "uix:disk-clone",
	});
}

export default Component;
