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
		"content": `<style>.fige7b_8m {
  d: path("M10.5 10.5h3a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-3.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu-5ubhag {
  d: path("M6.5 3h11a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7");
}
</style><g class="hntgybcog"><path class="zu-5ubhag"/><path class="fige7b_8m"/></g>`,
		"fallback": "uix:coffee-canister",
	});
}

export default Component;
