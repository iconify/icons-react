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
		"content": `<style>.fh9ko2brh {
  d: path("M5 11.5L7 14l2-2.5l2 2.5l2-2.5l2 2.5M4.5 15.5V20m11-4.5V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ij2rfybqn {
  d: path("M4.25 10h11.5a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 4.25 10M5 3.5h6L9.5 10h-3Zm14.5 6.875l1.101.482a1.5 1.5 0 0 1 .899 1.374v1.038a1.5 1.5 0 0 1-.899 1.374l-1.101.482a1.428 1.428 0 0 1-2-1.308v-2.134a1.428 1.428 0 0 1 2-1.308");
}
</style><g class="hntgybcog"><path class="ij2rfybqn"/><path class="fh9ko2brh"/></g>`,
		"fallback": "uix:extruder",
	});
}

export default Component;
