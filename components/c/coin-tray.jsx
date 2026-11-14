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
		"content": `<style>.cb1mfwbvi {
  d: path("M13.5 7.25q-.375-.75-1.5-.75c-1 0-1.5.5-1.5 1.25c0 1.5 3 1 3 2.5c0 .75-.6 1.25-1.5 1.25c-.8 0-1.3-.35-1.5-.75m1.5-5.5V6.5m0 5v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.urc0e89hs {
  d: path("M2.5 14h19c0 4.5-4 7-9.5 7s-9.5-2.5-9.5-7Zm5.322-.021a6.5 6.5 0 1 1 8.356 0");
}
</style><g class="ulnmmdpxh"><path class="urc0e89hs"/><path class="cb1mfwbvi"/></g>`,
		"fallback": "uix-sharp:coin-tray",
	});
}

export default Component;
