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
		"content": `<style>.ig8g-ub9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v4h-19Zm4 4v10a3 3 0 0 0 3 3H20a3 3 0 0 1-3-3v-10M9.5 11H14m-4.5 3.5H14");
}
</style><path class="ig8g-ub9c"/>`,
		"fallback": "uix-sharp:atm-receipt-slot",
	});
}

export default Component;
