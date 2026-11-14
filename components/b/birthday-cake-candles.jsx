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
		"content": `<style>.fe4dj7dzc {
  d: path("M7.5 12h9a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17v-1.5A3.5 3.5 0 0 1 7.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9gmn8bye {
  d: path("M4 15.25q2 1.75 4 0t4 0t4 0t4 0M8 8.75V12m4-3.25V12m4-3.25V12M8 5.75h.01m3.99 0h.01m3.99 0h.01");
}
</style><g class="hntgybcog"><path class="fe4dj7dzc"/><path class="x9gmn8bye"/></g>`,
		"fallback": "uix:birthday-cake-candles",
	});
}

export default Component;
