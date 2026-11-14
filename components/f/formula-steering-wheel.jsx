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
		"content": `<style>.anah9_i4s {
  d: path("M3.25 12.75H7.5L10 18m10.75-5.25H16.5L14 18");
}

.dfap4fbzd {
  d: path("M5 18a8.75 8.75 0 1 1 14 0ZM9 7.5h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dfap4fbzd"/><path class="anah9_i4s"/></g>`,
		"fallback": "uix-sharp:formula-steering-wheel",
	});
}

export default Component;
