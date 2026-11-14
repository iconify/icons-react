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
		"content": `<style>.lc_wrqbrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.523 18.5H2L11 3l5.624 9.686M11 8.5v4m0 2.75h.01m3.74 6l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="lc_wrqbrd"/>`,
		"fallback": "uix-sharp:error-rate",
	});
}

export default Component;
