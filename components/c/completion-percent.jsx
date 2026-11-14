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

.m1bg77snb {
  d: path("M7.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.pz6_btb5l {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 2.5v3m-3.5 10l7-7");
}
</style><g class="hntgybcog"><path class="pz6_btb5l"/><path class="m1bg77snb"/></g>`,
		"fallback": "uix:completion-percent",
	});
}

export default Component;
