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
		"content": `<style>.f8s-1mslk {
  d: path("m3.75 5l.385-1.027A1.5 1.5 0 0 1 5.54 3h11.92a1.5 1.5 0 0 1 1.405.973L19.25 5a1.48 1.48 0 0 1-1.386 2H5.136A1.48 1.48 0 0 1 3.75 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugdnc46pv {
  d: path("M4.5 15V7h13v4.7M2.5 15h10.2m2.05 2.75l1-3.25h4.5l1 3.25m-6 0h5.5A1.25 1.25 0 0 1 22 19a1.25 1.25 0 0 1-1.25 1.25h-5.5A1.25 1.25 0 0 1 14 19a1.25 1.25 0 0 1 1.25-1.25m.5 2.5v1.5m4.5-1.5v1.5");
}
</style><g class="hntgybcog"><path class="f8s-1mslk"/><path class="ugdnc46pv"/></g>`,
		"fallback": "uix:drive-through-window",
	});
}

export default Component;
