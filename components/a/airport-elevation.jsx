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
		"content": `<style>.grt5lnbyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.521 19.5H2.5L11 3l4.735 9.191M7.5 9.75l1.75 1.75L11 9.75l1.75 1.75l1.75-1.75M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="grt5lnbyz"/>`,
		"fallback": "uix-sharp:airport-elevation",
	});
}

export default Component;
