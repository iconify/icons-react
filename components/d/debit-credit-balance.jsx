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
		"content": `<style>.sc7yghvxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18m-3.5-3.5L21 7l-3.5 3.5M21 17H3m3.5-3.5L3 17l3.5 3.5");
}
</style><path class="sc7yghvxe"/>`,
		"fallback": "uix-sharp:debit-credit-balance",
	});
}

export default Component;
