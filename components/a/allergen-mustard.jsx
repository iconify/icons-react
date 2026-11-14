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
		"content": `<style>.kg9jqzbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V10.5l2.5-3h6l2.5 3V21Zm4-13.5l1-4h1l1 4m2.5-3h.01m4.99 10V18m0 3h.01");
}
</style><path class="kg9jqzbuv"/>`,
		"fallback": "uix-sharp:allergen-mustard",
	});
}

export default Component;
