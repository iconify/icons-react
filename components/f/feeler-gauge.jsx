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
		"content": `<style>.mhm40qbvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.75L6.25 4A1.5 1.5 0 0 1 9 4.5l-1.75 10l7.25-7.25a1.5 1.5 0 0 1 2.25 2.25L9.5 16.75l10-1.75a1.5 1.5 0 0 1 .5 2.75L5.25 20.5a1.5 1.5 0 0 1-1.75-1.75Z");
}
</style><path class="mhm40qbvm"/>`,
		"fallback": "uix-sharp:feeler-gauge",
	});
}

export default Component;
