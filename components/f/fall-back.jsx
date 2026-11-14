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
		"content": `<style>.aarn-iblx {
  d: path("M9.25 16.75L11.5 19l-2.25 2.25M11.5 7.5v4L14 13m1.5 8.5q0-6 6-6q0 6-6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5_bi3bag {
  d: path("M11.5 19a7.5 7.5 0 1 1 7.5-7.5");
}
</style><g class="hntgybcog"><path class="l5_bi3bag"/><path class="aarn-iblx"/></g>`,
		"fallback": "uix:fall-back",
	});
}

export default Component;
