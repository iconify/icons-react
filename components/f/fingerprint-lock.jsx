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
		"content": `<style>.hflll-0tm {
  d: path("M6.5 18.5V11a3.5 3.5 0 0 1 7 0v1.25M10 20.5V11m6.75 6h2.5A1.75 1.75 0 0 1 21 18.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-1A1.75 1.75 0 0 1 16.75 17m-.5 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pjbn3_b9m {
  d: path("M3 15v-4a7 7 0 0 1 14 0v1.25");
}
</style><g class="hntgybcog"><path class="pjbn3_b9m"/><path class="hflll-0tm"/></g>`,
		"fallback": "uix:fingerprint-lock",
	});
}

export default Component;
