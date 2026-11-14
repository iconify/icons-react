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
		"content": `<style>.anea6achc {
  d: path("M4.5 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w952hr9xv {
  d: path("M2.5 7h19v13h-19ZM6 7V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 5v2");
}
</style><g class="ulnmmdpxh"><path class="w952hr9xv"/><path class="anea6achc"/></g>`,
		"fallback": "uix-sharp:boombox",
	});
}

export default Component;
