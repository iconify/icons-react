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

.iv5qv0bvv {
  d: path("M3 17a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.owax7qbdi {
  d: path("m6 17l3.5-5h6l-4 5Zm12 0l-2.5-5L14 4.5h3.5m-8 7.5l-.75-3m-1.5 0h3.25");
}
</style><g class="hntgybcog"><path class="iv5qv0bvv"/><path class="owax7qbdi"/></g>`,
		"fallback": "uix:bmx-bike",
	});
}

export default Component;
