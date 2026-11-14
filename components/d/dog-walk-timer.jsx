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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.txfpbhbis {
  d: path("M11 11c-5-4-5-8.5 0-8.5S16 7 11 11m0 0c0 3.5-2.5 4-4 6m-.25 0zA2.25 2.25 0 0 1 9 19.25a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 6.75 17m8 1a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="txfpbhbis"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:dog-walk-timer",
	});
}

export default Component;
