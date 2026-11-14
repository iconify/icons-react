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
		"content": `<style>.f8uwz1n7s {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9Z");
}

.o_fx6sb_g {
  d: path("M8.5 13.75L7 21l5-2.5l5 2.5l-1.5-7.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f8uwz1n7s"/><path class="o_fx6sb_g"/></g>`,
		"fallback": "uix-sharp:employee-award",
	});
}

export default Component;
