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
		"content": `<style>.w4bfr8b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19v4h-19Zm0 6h19v3h-19ZM5 12v2m7-2v2m7-2v2M5 17v3.5m7-3.5v3.5m7-3.5v3.5");
}
</style><path class="w4bfr8b0e"/>`,
		"fallback": "uix-sharp:euro-pallet",
	});
}

export default Component;
