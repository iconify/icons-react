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
		"content": `<style>.ayf-ixbpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 15.5L4.5 9A2.5 2.5 0 0 1 8 5.5l10 10m-9.5 0h12v4h-12ZM6.25 7.25h.01");
}
</style><path class="ayf-ixbpn"/>`,
		"fallback": "uix-sharp:bike-pedal",
	});
}

export default Component;
