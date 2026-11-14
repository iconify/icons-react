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
		"content": `<style>.kty1e-b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15h16.5a1.25 1.25 0 0 1 1.25 1.25v4a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25v-4A1.25 1.25 0 0 1 3.75 15ZM4 15v-5h8V3.5h7V15M7 10V5m0 13.25h.01m4.99 0h.01m4.99 0h.01");
}
</style><path class="kty1e-b3g"/>`,
		"fallback": "uix-sharp:crawler-tractor",
	});
}

export default Component;
