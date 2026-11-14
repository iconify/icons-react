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
		"content": `<style>.bu0hbghds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h7.5v6H5Zm-1.5 6h10V15h-10Zm10 11.9v1.1h-11V15h11v1.1M8.75 2.5v2m-.25 4v2M8 15v2m10-2.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="bu0hbghds"/>`,
		"fallback": "uix-sharp:discount-bulk",
	});
}

export default Component;
