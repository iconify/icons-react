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
		"content": `<style>.n8bkksb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h18v9H3Zm11.5-9l7 6m-10 2.5S7 9.25 7 6.5C7 5 8 4 9.5 4c.75 0 1.5.5 2 1.25C12 4.5 12.75 4 13.75 4C15 4 16 5 16 6.5c0 2.75-4.5 5.5-4.5 5.5ZM7 16.5h10");
}
</style><path class="n8bkksb5y"/>`,
		"fallback": "uix-sharp:heart-transplant",
	});
}

export default Component;
