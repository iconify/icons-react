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
		"content": `<style>.pt69v0syi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.5 2.5l-7 7m0 0L3 14a11 11 0 0 0 7 7Zm-2 2l-6.25 4.25M13 12.5L9.5 19m6 1.5h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="pt69v0syi"/>`,
		"fallback": "uix-sharp:data-cleaning",
	});
}

export default Component;
