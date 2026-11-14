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
		"content": `<style>.gs0zx6bkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19.5v-7C3.5 7.5 7.25 4 12 4c4.25 0 7.75 3 8.5 7.5H12V15h8.5v4.5Zm9.5-11l8.5-3");
}
</style><path class="gs0zx6bkd"/>`,
		"fallback": "uix-sharp:helmet-visor-up",
	});
}

export default Component;
