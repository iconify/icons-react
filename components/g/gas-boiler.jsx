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

.ltrinoqxd {
  d: path("M12 5.5c2 2 3.25 4 3.25 6.5a3.25 3.25 0 0 1-6.5 0C8.75 9.5 10 7.5 12 5.5M9 18v3.5m6-3.5v3.5");
}

.x8nndur2y {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v6.75A4.375 4.375 0 0 1 14.125 18h-4.25A4.375 4.375 0 0 1 5.5 13.625v-6.75A4.375 4.375 0 0 1 9.875 2.5");
}
</style><g class="hntgybcog"><path class="x8nndur2y"/><path class="ltrinoqxd"/></g>`,
		"fallback": "uix:gas-boiler",
	});
}

export default Component;
