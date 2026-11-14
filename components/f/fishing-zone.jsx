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
		"content": `<style>.fyizozbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.65 2.644a9.5 9.5 0 0 1 7.706 7.706m0 3.3a9.5 9.5 0 0 1-7.706 7.706m-3.3 0a9.5 9.5 0 0 1-7.706-7.706m0-3.3a9.5 9.5 0 0 1 7.706-7.706M6 12c2-4.5 6.5-4.5 8.5 0L18 9.5v5L14.5 12c-2 4.5-6.5 4.5-8.5 0Zm3.25 0h.01");
}
</style><path class="fyizozbrn"/>`,
		"fallback": "uix-sharp:fishing-zone",
	});
}

export default Component;
