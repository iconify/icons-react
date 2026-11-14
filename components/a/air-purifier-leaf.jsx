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
		"content": `<style>.a4_z72boz {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5M9 6h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icwbctepq {
  d: path("M9 18c0-5 2-8 6.5-8.5c0 5-2.5 8-6.5 8.5m0 0l3.5-4.5");
}
</style><g class="hntgybcog"><path class="a4_z72boz"/><path class="icwbctepq"/></g>`,
		"fallback": "uix:air-purifier-leaf",
	});
}

export default Component;
