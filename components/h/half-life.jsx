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
		"content": `<style>.h7yhrubgy {
  d: path("M7 5.5c2.5 7.5 6 11 13 11.5m-9.5 3v-2.75");
}

.mqbnxsmkn {
  d: path("M4 3v17h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mqbnxsmkn"/><path class="h7yhrubgy"/></g>`,
		"fallback": "uix-sharp:half-life",
	});
}

export default Component;
