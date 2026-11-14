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
		"content": `<style>.t0e3o7beq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5q4 8.5 0 17q-4-8.5 0-17ZM2.5 7h5.25M2.5 12H7m-4.5 5h5.25m2.5-10L16 10m-5.75 7L16 14m4-2h.01");
}
</style><path class="t0e3o7beq"/>`,
		"fallback": "uix-sharp:focal-point",
	});
}

export default Component;
