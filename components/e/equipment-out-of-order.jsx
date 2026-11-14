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
		"content": `<style>.askx5pbpc {
  d: path("M8.25 10h1.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 9.75 16h-1.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 8.25 10m11.1 6.034l1.605 3.312a1.5 1.5 0 0 1-1.349 2.154h-3.212a1.5 1.5 0 0 1-1.349-2.154l1.605-3.312a1.5 1.5 0 0 1 2.7 0M18 18.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klf5vzbha {
  d: path("M3.5 21.5v-19h11V12M9 2.5V10");
}
</style><g class="hntgybcog"><path class="klf5vzbha"/><path class="askx5pbpc"/></g>`,
		"fallback": "uix:equipment-out-of-order",
	});
}

export default Component;
