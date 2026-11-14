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
		"content": `<style>.qt0ut6b3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.5L5.75 14m6.5-11.5L10.75 14M3.5 6.25h11.25M3 10.25h11.25M2.5 19.5h1.25m2.75 0h1.25m2.75 0h1.25m3.75-2.25L18 15l2.5 2.25m-5.75 0h6.5m-4.75 0V21m3-3.75V21m-4.75.25h6.5");
}
</style><path class="qt0ut6b3h"/>`,
		"fallback": "uix-sharp:bank-routing-number",
	});
}

export default Component;
