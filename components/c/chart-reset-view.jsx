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

.lkldk5byw {
  d: path("M3 8V5a2 2 0 0 1 2-2h3m8 0h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3m-8 0H5a2 2 0 0 1-2-2v-3m14.5-4A5.5 5.5 0 1 1 12 6.5");
}

.z3vmombar {
  d: path("m15.25 13.5l2.25-2.25l2.25 2.25");
}
</style><g class="hntgybcog"><path class="lkldk5byw"/><path class="z3vmombar"/></g>`,
		"fallback": "uix:chart-reset-view",
	});
}

export default Component;
