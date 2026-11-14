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
		"content": `<style>.cfjh0bb9c {
  d: path("m12 12.5l-2.25 2.25H13L10.75 17");
}

.csk2xcisd {
  d: path("M6.875 9.75h7.75A4.375 4.375 0 0 1 19 14.125v1.25a4.375 4.375 0 0 1-4.375 4.375h-7.75A4.375 4.375 0 0 1 2.5 15.375v-1.25A4.375 4.375 0 0 1 6.875 9.75M21.75 13.5V16M2.5 4.5a3.25 1.5 0 1 0 6.5 0a3.25 1.5 0 1 0-6.5 0m10 0a3.25 1.5 0 1 0 6.5 0a3.25 1.5 0 1 0-6.5 0M5.75 6v3.75m10-3.75v3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="csk2xcisd"/><path class="cfjh0bb9c"/></g>`,
		"fallback": "uix:drone-battery",
	});
}

export default Component;
