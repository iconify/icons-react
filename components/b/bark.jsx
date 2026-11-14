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
		"content": `<style>.p54tz9ptr {
  d: path("M6 5c1 5-1 11 0 16.5M18 5c-1 5 1 11 0 16.5m-8-11c.75 3-.75 6 0 9.5m4-9.5c-.75 3 .75 6 0 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vay788w-x {
  d: path("M6 5a6 2.5 0 1 0 12 0A6 2.5 0 1 0 6 5Z");
}
</style><g class="ulnmmdpxh"><path class="vay788w-x"/><path class="p54tz9ptr"/></g>`,
		"fallback": "uix-sharp:bark",
	});
}

export default Component;
