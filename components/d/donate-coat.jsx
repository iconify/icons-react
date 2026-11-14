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
		"content": `<style>.bad1egbwz {
  d: path("m18 21.5l-3.25-3.25a2 2 0 0 1 3.25-2a2 2 0 0 1 3.25 2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i0ysfwbvp {
  d: path("M13.034 20.5H5.5v-6l-3-.5L5 4.25L8.5 3l3 2.5l3-2.5L18 4.25l2.229 8.692M11.5 5.5v15");
}
</style><g class="hntgybcog"><path class="i0ysfwbvp"/><path class="bad1egbwz"/></g>`,
		"fallback": "uix:donate-coat",
	});
}

export default Component;
