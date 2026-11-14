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
		"content": `<style>.xo4d7nbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 5v3.5L16 10l-1.5-2C12 9 9 12 8 14.5l2 1.5l-1.5 4.5H5a2 2 0 0 1-2-2C3.5 10 10 3.5 18.5 3a2 2 0 0 1 2 2ZM14 18.25q4-4.25 8 0q-4 4.25-8 0Zm1-3.5l6 7");
}
</style><path class="xo4d7nbdu"/>`,
		"fallback": "uix-sharp:caller-id-hidden",
	});
}

export default Component;
