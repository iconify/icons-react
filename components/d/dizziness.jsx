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
		"content": `<style>.k-5db8bsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 21.5V18c-2.25-1.5-3-3.5-3-5.75c0-3.75 2.75-6.5 6.5-6.5C14 5.75 16.5 8 16.5 11.5l1.5 3q0 .75-.75.75h-.75v2c0 1-.75 1.75-1.5 1.75h-1.75v2.5M18.5 5c0-.75 1-1 1.25-.25c.25 1-1 1.75-2 1c-1.25-1-.25-3 1.5-3s2.5 1.75 2 3.25M3 4.75c2-2 6-2.5 9.5-1.5m2 7.5h.01");
}
</style><path class="k-5db8bsl"/>`,
		"fallback": "uix-sharp:dizziness",
	});
}

export default Component;
