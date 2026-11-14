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
		"content": `<style>.bx8rpubcn {
  d: path("M4.75 18a9.5 9.5 0 1 1 14.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yttr8mkjg {
  d: path("M4.75 18a7.25 2.5 0 1 0 14.5 0a7.25 2.5 0 1 0-14.5 0");
}
</style><g class="hntgybcog"><path class="bx8rpubcn"/><path class="yttr8mkjg"/></g>`,
		"fallback": "uix:immersive-space",
	});
}

export default Component;
