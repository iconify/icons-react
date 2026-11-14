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
		"content": `<style>.zlxv3mb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.5h14m-7 0V13m0 3c0-3-2-4.5-5.5-4.5c0 3 2 4.5 5.5 4.5Zm0-1.5c0-2.5 2-4 5.5-4c0 3-2 4-5.5 4Zm-4.5-7q-1-1.25 0-2.5t0-2.5m4.5 5Q11 6.25 12 5t0-2.5m4.5 5q-1-1.25 0-2.5t0-2.5");
}
</style><path class="zlxv3mb0m"/>`,
		"fallback": "uix-sharp:evapotranspiration",
	});
}

export default Component;
