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
		"content": `<style>.d3p9rbb7h {
  d: path("M3.25 5.75h2.5v2.5m6.417 1.391l1.411.869a1.75 1.75 0 0 1 0 2.98l-1.411.869A1.75 1.75 0 0 1 9.5 12.868v-1.736a1.75 1.75 0 0 1 2.667-1.491");
}

.d5cgy1yrk {
  d: path("M18.25 5.75a8.75 8.75 0 1 1-12.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d5cgy1yrk"/><path class="d3p9rbb7h"/></g>`,
		"fallback": "uix:autoplay",
	});
}

export default Component;
