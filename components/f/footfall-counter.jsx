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
		"content": `<style>.qronu0oeb {
  d: path("M9.5 4.5h5v3h-5ZM4 13h3m2.75 0h4.5M17 13h3");
}

.tzg9rjb0p {
  d: path("M4 21.5v-17h16v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tzg9rjb0p"/><path class="qronu0oeb"/></g>`,
		"fallback": "uix-sharp:footfall-counter",
	});
}

export default Component;
