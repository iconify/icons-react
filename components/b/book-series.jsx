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
		"content": `<style>.t8xz54aie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h6.5v17.5H4Zm9.25 3.5h6.5v14h-6.5ZM2.5 20.5h19M4 7h6.5m2.75 3.5h6.5");
}
</style><path class="t8xz54aie"/>`,
		"fallback": "uix-sharp:book-series",
	});
}

export default Component;
