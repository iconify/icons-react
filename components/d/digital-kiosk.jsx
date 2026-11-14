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

.myqgb8bso {
  d: path("M11.5 5.25h1A1.75 1.75 0 0 1 14.25 7v3a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 9.75 10V7a1.75 1.75 0 0 1 1.75-1.75M10 15.5h4");
}

.xfr1zeb6q {
  d: path("M7 21.5v-17a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v17m-12.5 0h15");
}
</style><g class="hntgybcog"><path class="xfr1zeb6q"/><path class="myqgb8bso"/></g>`,
		"fallback": "uix:digital-kiosk",
	});
}

export default Component;
