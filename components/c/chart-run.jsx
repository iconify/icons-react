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
		"content": `<style>.byn2wwvgr {
  d: path("M19.25 17a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwv71kuxp {
  fill: currentColor;
  d: path("M6.5 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4.5-2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M15.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.lrrm4bcia {
  d: path("M2.25 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.noj4z5n_b {
  d: path("m3.5 16.5l4.5-8l4.5-2L17 9l3.5 8m-18-4.5h2m2 0h2m2 0h2m2 0h2m2 0h3");
}
</style><g class="hntgybcog"><path class="noj4z5n_b"/><path class="lrrm4bcia"/><path class="kwv71kuxp"/><path class="byn2wwvgr"/></g>`,
		"fallback": "uix:chart-run",
	});
}

export default Component;
