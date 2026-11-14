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
		"content": `<style>.cfzsbyb4d {
  d: path("M8 10.5h8v8H8Zm4 0v8");
}

.o-av9cbeg {
  d: path("M5 4.5a2 2 0 0 1 2-2h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-av9cbeg"/><path class="cfzsbyb4d"/></g>`,
		"fallback": "uix-sharp:esim",
	});
}

export default Component;
