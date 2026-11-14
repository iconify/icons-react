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
		"content": `<style>.mvtbsmr2z {
  d: path("M6.25 6.25a2.75 2.75 0 0 1 5.5 0M9 5.5V18M4 9.5H2.25M4 13H2.25M14 9.5h1.75M17 16l4.75 2.75L17 21.5Z");
}

.tpmxkdvtz {
  d: path("M4 10.5a5 5 0 0 1 10 0V13a5 5 0 0 1-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tpmxkdvtz"/><path class="mvtbsmr2z"/></g>`,
		"fallback": "uix-sharp:bug-play",
	});
}

export default Component;
