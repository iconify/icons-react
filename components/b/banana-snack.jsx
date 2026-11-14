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
		"content": `<style>.ferto1sej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9c1 6 6 10.5 12.5 10c2.5-.25 4-1.5 4-2.5c-3.5.5-8.5-1-11.5-5C7.5 9.5 7 7 7 5H5c-.75 1-1.25 2.5-1 4Zm1-5.5h2");
}
</style><path class="ferto1sej"/>`,
		"fallback": "uix-sharp:banana-snack",
	});
}

export default Component;
