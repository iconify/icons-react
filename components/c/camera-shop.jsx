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
		"content": `<style>.a_a_d8i5l {
  d: path("m16.086 12.735l-1.406 2.5a1.5 1.5 0 0 1-1.307.765h-2.746a1.5 1.5 0 0 1-1.307-.765l-1.406-2.5a1.5 1.5 0 0 1 0-1.47l1.406-2.5A1.5 1.5 0 0 1 10.627 8h2.746a1.5 1.5 0 0 1 1.307.765l1.406 2.5a1.5 1.5 0 0 1 0 1.47M14.25 8l-3-5.5m3 13.5h6.25m-13-4l-3.25 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="a_a_d8i5l"/></g>`,
		"fallback": "uix:camera-shop",
	});
}

export default Component;
