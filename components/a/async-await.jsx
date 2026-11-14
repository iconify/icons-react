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
		"content": `<style>.fgp1rfbli {
  d: path("m12.5 13l1.5-1.5l1.5 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysl3vc4lj {
  d: path("M3 3h10l-5 9Zm5 9l5 9H3Zm9.5-3.5A3.5 3.5 0 1 1 14 12");
}
</style><g class="hntgybcog"><path class="ysl3vc4lj"/><path class="fgp1rfbli"/></g>`,
		"fallback": "uix:async-await",
	});
}

export default Component;
