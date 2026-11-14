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
		"content": `<style>.etuv3obgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h5A1.75 1.75 0 0 1 11 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 4.25 2.5m11 0h4.5a1.75 1.75 0 0 1 1.75 1.75v6A1.75 1.75 0 0 1 19.75 12h-4.5a1.75 1.75 0 0 1-1.75-1.75v-6a1.75 1.75 0 0 1 1.75-1.75m-.375 12za1.375 1.375 0 0 1 1.375 1.375v4.25a1.375 1.375 0 0 1-1.375 1.375a1.375 1.375 0 0 1-1.375-1.375v-4.25a1.375 1.375 0 0 1 1.375-1.375m5.25 0za1.375 1.375 0 0 1 1.375 1.375v4.25a1.375 1.375 0 0 1-1.375 1.375a1.375 1.375 0 0 1-1.375-1.375v-4.25a1.375 1.375 0 0 1 1.375-1.375");
}
</style><path class="etuv3obgb"/>`,
		"fallback": "uix:chart-mosaic",
	});
}

export default Component;
