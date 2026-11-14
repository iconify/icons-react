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

.prtsjk3cc {
  d: path("M3.5 10a8.5 4.5 0 1 0 17 0a8.5 4.5 0 1 0-17 0");
}

.zq7_2eptb {
  d: path("M11.75 13.5h1.5A1.75 1.75 0 0 1 15 15.25A1.75 1.75 0 0 1 13.25 17h-1.5A1.75 1.75 0 0 1 10 15.25a1.75 1.75 0 0 1 1.75-1.75M4.5 7l-2-2.5m2 8.5l-2 2.5");
}
</style><g class="hntgybcog"><path class="prtsjk3cc"/><path class="zq7_2eptb"/></g>`,
		"fallback": "uix:airship",
	});
}

export default Component;
