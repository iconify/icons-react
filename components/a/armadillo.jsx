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
		"content": `<style>.z-_gdd9ta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 13.5l4-3v-3l1.75 2C10 8 12 7.25 14 7.25c3.5 0 5.5 2.5 5.5 5.75l1.5 3.5l-2-2H7.5Zm6.5 1v3m6-3v3M11 8v6.5m3-7.25v7.25M17 8v6.5");
}
</style><path class="z-_gdd9ta"/>`,
		"fallback": "uix-sharp:armadillo",
	});
}

export default Component;
