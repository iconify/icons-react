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
		"content": `<style>.brtkinouz {
  d: path("M3 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m1.5 4l-2 2M8.5 9l13-4m0-2.5V10");
}

.enzz1bc_j {
  d: path("M7 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="brtkinouz"/><path class="enzz1bc_j"/></g>`,
		"fallback": "uix:chalk-line",
	});
}

export default Component;
