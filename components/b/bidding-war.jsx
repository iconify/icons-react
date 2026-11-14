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
		"content": `<style>.ee779cczw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v7h-8Zm11 0h8v7h-8Zm-7 7l8 12m3-12l-8 12m-3-16.75v2.5m11-2.5v2.5");
}
</style><path class="ee779cczw"/>`,
		"fallback": "uix-sharp:bidding-war",
	});
}

export default Component;
