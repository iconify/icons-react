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
		"content": `<style>.qyjtyqe1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h5v8H3Zm8.517 14.728a6 6 0 0 1-.517.022H9.25L10 21.5H4.75L5 16.75C3.75 15.5 3 13.5 3 11h13.5q0 .326-.022.639M10.5 11V9m3.75 9a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM16 18h4");
}
</style><path class="qyjtyqe1e"/>`,
		"fallback": "uix-sharp:constipation",
	});
}

export default Component;
