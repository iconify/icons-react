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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.u5on7nbmo {
  d: path("M13.75 9.5a2.25 2.25 0 1 1 1 3.5A2.25 2.25 0 1 1 12 15a2.25 2.25 0 1 1-2.75-2a2.25 2.25 0 1 1 1-3.5a2.25 2.25 0 1 1 3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="u5on7nbmo"/></g>`,
		"fallback": "uix-sharp:floral-print-swatch",
	});
}

export default Component;
