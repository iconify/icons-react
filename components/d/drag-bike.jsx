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

.ldw6an86d {
  d: path("m6 13l5-4.5h5.5l2 4.5m-2-4.5l1-3M2.5 19h19");
}

.v8h5vehvw {
  d: path("M3 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="v8h5vehvw"/><path class="ldw6an86d"/></g>`,
		"fallback": "uix:drag-bike",
	});
}

export default Component;
