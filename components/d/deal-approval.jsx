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
		"content": `<style>.ab7mwhjqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-3 7h12v4H6Zm-3.5 8.5L5 17h16.5L19 21.5Zm8-13V13m3-4.5V13");
}
</style><path class="ab7mwhjqy"/>`,
		"fallback": "uix-sharp:deal-approval",
	});
}

export default Component;
