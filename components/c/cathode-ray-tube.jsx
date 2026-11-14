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
		"content": `<style>.gs9er_bfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 4h4.75A2.625 2.625 0 0 1 13 6.625v7.75A2.625 2.625 0 0 1 10.375 17h-4.75A2.625 2.625 0 0 1 3 14.375v-7.75A2.625 2.625 0 0 1 5.625 4M13 6l5.5 3.5H21v3h-2.5L13 15m-5 2v3.5m-3 0h6");
}
</style><path class="gs9er_bfu"/>`,
		"fallback": "uix:cathode-ray-tube",
	});
}

export default Component;
