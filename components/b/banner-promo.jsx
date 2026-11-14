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
		"content": `<style>.d8vgh5s8x {
  d: path("m8.75 8.25l1 2.5h2.5l-2 1.75L11 15l-2.25-1.5L6.5 15l.75-2.5l-2-1.75h2.5Z");
}

.h9y5zbb2c {
  d: path("M2.5 5.5h19v13h-19ZM15 10h3.75M15 14h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h9y5zbb2c"/><path class="d8vgh5s8x"/></g>`,
		"fallback": "uix-sharp:banner-promo",
	});
}

export default Component;
