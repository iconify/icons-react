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
		"content": `<style>.ediyfmbyd {
  d: path("M7.5 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h6");
}

.h21n0dbod {
  d: path("M4 8h16v12H4Zm12 0l3.5-5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h21n0dbod"/><path class="ediyfmbyd"/></g>`,
		"fallback": "uix-sharp:crank-radio",
	});
}

export default Component;
