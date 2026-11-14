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

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.yxie7fbcr {
  d: path("M11.427 19.5H3.5c-.6 0-1-.4-1-1c0-3 3-5 7-5c1.213 0 2.333.184 3.306.523M5.5 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="yxie7fbcr"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:cfo",
	});
}

export default Component;
