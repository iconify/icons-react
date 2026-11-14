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
		"content": `<style>.zcew5ebpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10H15v3.5H3.5Zm9 3.5H15l3.75 6.25l-2.25 1.5Zm-6-1.75h.01m2.74 0h.01m2.74 0h.01M18.75 20c1.75-.5 2.75-2.5 2.5-5M6 8.5c-1-1.5 1-3 0-5m3.25 5c-1-1.5 1-3 0-5m3.25 5c-1-1.5 1-3 0-5");
}
</style><path class="zcew5ebpm"/>`,
		"fallback": "uix-sharp:garment-steamer",
	});
}

export default Component;
