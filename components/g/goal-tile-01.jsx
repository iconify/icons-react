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

.ja8_zg6om {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.wst7c_x3t {
  d: path("M7.875 3.5h8.25A4.375 4.375 0 0 1 20.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 16.125v-8.25A4.375 4.375 0 0 1 7.875 3.5");
}

.zbdgq5bmg {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 0l4.5-4.5m-1.75 0h1.75v1.75");
}
</style><g class="hntgybcog"><path class="wst7c_x3t"/><path class="ja8_zg6om"/><path class="zbdgq5bmg"/></g>`,
		"fallback": "uix:goal-tile-01",
	});
}

export default Component;
