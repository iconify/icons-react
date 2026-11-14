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
		"content": `<style>.aqw2k7gkz {
  d: path("M3.5 21.5v-19m0 2.5h17M9.125 7.5h8.25A2.625 2.625 0 0 1 20 10.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-8.25A2.625 2.625 0 0 1 6.5 15.875v-5.75A2.625 2.625 0 0 1 9.125 7.5M9 5v2.5M17.5 5v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6u7kkbuj {
  d: path("M15.25 11.25c-.25-.75-1-1-2-1c-1.15 0-2 .6-2 1.5c0 1.75 4 1 4 2.75c0 .9-.85 1.25-2 1.25c-1.1 0-1.85-.5-2-1m2-5.5v1m0 5.5v1");
}
</style><g class="hntgybcog"><path class="aqw2k7gkz"/><path class="i6u7kkbuj"/></g>`,
		"fallback": "uix:for-sale-sign",
	});
}

export default Component;
