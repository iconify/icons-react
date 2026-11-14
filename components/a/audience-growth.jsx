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

.u9_miabfp {
  d: path("M15.5 3h4v4");
}

.xdlrq0bsm {
  d: path("M3.25 14.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-14.75 7C2.5 20 3.5 19 5 19s2.5 1 2.5 2.5m2 0c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5m2 0c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5m-18-12l5-4L12 8l7.5-5");
}
</style><g class="hntgybcog"><path class="xdlrq0bsm"/><path class="u9_miabfp"/></g>`,
		"fallback": "uix:audience-growth",
	});
}

export default Component;
