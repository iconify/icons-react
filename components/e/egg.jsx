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

.w9wi7_b7i {
  d: path("M14.5 2.75c4.25 1.25 5 8.25 3.75 13C17 20 13.5 22.25 9.5 21.25c-3.75-1-6-4.75-4.75-9.25C6 7.25 10 1.75 14.5 2.75");
}

.wgl-673uv {
  d: path("M8 14.5c0-2 .75-4 2-5.5");
}
</style><g class="hntgybcog"><path class="w9wi7_b7i"/><path class="wgl-673uv"/></g>`,
		"fallback": "uix:egg",
	});
}

export default Component;
