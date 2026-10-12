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
		"content": `<style>.cfppciczt {
  d: path("m12 7.25l-1.227 2.864L12 11.75m0 .75l4.5 7.5");
}

.dt1_2ibbu {
  d: path("M3 13c0-4.5 4-7.75 9-7.75S21 8.5 21 13c0 1.4-1.25 2.4-2.6 1.9L12 12.5l-6.4 2.4l-2.6.963z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dt1_2ibbu"/><path class="cfppciczt"/></g>`,
		"fallback": "iconoven:fortune-cookie-sharp",
	});
}

export default Component;
