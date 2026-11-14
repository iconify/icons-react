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
		"content": `<style>.ccbx_sbrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6.75l3.587-2.192a1.75 1.75 0 0 1 1.826 0L16.5 6.75a1.484 1.484 0 0 1-.774 2.75H8.274A1.484 1.484 0 0 1 7.5 6.75M5 9.5V20M19 9.5V20M3 20h18m-9.5-6h1a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="ccbx_sbrr"/>`,
		"fallback": "uix:bank-building-small",
	});
}

export default Component;
