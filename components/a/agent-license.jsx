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

.h-4oh-crx {
  d: path("M8.75 14v7L12 18.75L15.25 21v-7M9.5 9l1.75 1.75L14.5 7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f8uwz1n7s"/><path class="h-4oh-crx"/></g>`,
		"fallback": "uix-sharp:agent-license",
	});
}

export default Component;
