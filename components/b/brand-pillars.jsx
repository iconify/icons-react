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
		"content": `<style>.uyjcabcae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18M6.5 6.25v8.5m5.5-8.5v8.5m5.5-8.5v8.5m-13 2.75h15m-17 3h19");
}
</style><path class="uyjcabcae"/>`,
		"fallback": "uix-sharp:brand-pillars",
	});
}

export default Component;
