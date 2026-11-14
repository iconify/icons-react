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

.ra-w1rhwh {
  d: path("M3 11h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm2.5 0V4.5a2 2 0 0 1 4 0v1m0 2.75V11");
}

.wgdalebrk {
  d: path("M7 15q2.5-1.5 5 0t5 0");
}
</style><g class="hntgybcog"><path class="ra-w1rhwh"/><path class="wgdalebrk"/></g>`,
		"fallback": "uix:bath-running",
	});
}

export default Component;
