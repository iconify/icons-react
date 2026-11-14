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
		"content": `<style>.b49yiqbsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8h17v4.5h-17ZM5 12.5v7A1.5 1.5 0 0 0 6.5 21H12m0-13v13m0-13c-1.5-3-5-5-5.25-2.25C6.6 7.25 9 8 12 8m0 0c1.5-3 5-5 5.25-2.25C17.4 7.25 15 8 12 8m2.75 10l2 2L21 15.75");
}
</style><path class="b49yiqbsh"/>`,
		"fallback": "uix-sharp:gift-check",
	});
}

export default Component;
