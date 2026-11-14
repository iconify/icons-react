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
		"content": `<style>.ctg3ymv3b {
  d: path("M7 18v-6a5 5 0 0 1 10 0v6l2.5 2.5h-15Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl8fukfcs {
  d: path("M10 7.5v-2a2 2 0 0 1 4 0v2m-7 6h10m-10 3h10");
}
</style><g class="hntgybcog"><path class="ctg3ymv3b"/><path class="jl8fukfcs"/></g>`,
		"fallback": "uix:bronze-bell-ancient",
	});
}

export default Component;
