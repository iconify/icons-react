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
		"content": `<style>.e2br2yjzw {
  d: path("M2.5 17.5V12h12V9.5H18l3.5 4v4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1jwf6bzp {
  d: path("M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-12-10l13-6.5M5 12l13-6.5m-10.5 2L9 10m3.5-5L14 7.5");
}
</style><g class="hntgybcog"><path class="e2br2yjzw"/><path class="w1jwf6bzp"/></g>`,
		"fallback": "uix:aerial-ladder-truck",
	});
}

export default Component;
