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
		"content": `<style>.eoo37sbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h9.5v14.5H3Zm-.5-3.5H13V7H2.5Zm.5 8h9.5M3 17h9.5m3 0h6a3 3 0 0 1-6 0Zm2.5 0l-5.5-2.75");
}
</style><path class="eoo37sbzs"/>`,
		"fallback": "uix-sharp:baking-powder-tin",
	});
}

export default Component;
