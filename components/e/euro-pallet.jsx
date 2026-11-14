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
		"content": `<style>.tys4x6h3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 20 12H4a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 4 8m0 6h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 17H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 14m1-2v2m7-2v2m7-2v2M5 17v3.5m7-3.5v3.5m7-3.5v3.5");
}
</style><path class="tys4x6h3s"/>`,
		"fallback": "uix:euro-pallet",
	});
}

export default Component;
