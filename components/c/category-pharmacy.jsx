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
		"content": `<style>.lhfg-wzrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25A1.75 1.75 0 0 1 15.25 6h-6.5A1.75 1.75 0 0 1 7 4.25A1.75 1.75 0 0 1 8.75 2.5M9.375 6h5.25A4.375 4.375 0 0 1 19 10.375v6.75a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125v-6.75A4.375 4.375 0 0 1 9.375 6m.125 8h5M12 11.5v5");
}
</style><path class="lhfg-wzrp"/>`,
		"fallback": "uix:category-pharmacy",
	});
}

export default Component;
