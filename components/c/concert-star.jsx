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
		"content": `<style>.p1f0v54pa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h4A1.5 1.5 0 0 1 13.5 4v7.5A1.5 1.5 0 0 1 12 13H8a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 8 2.5ZM10 13v1.2m0 1.8v5.5m-4 0h6.7m-6.2-14h7m4.25 6.5l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="p1f0v54pa"/>`,
		"fallback": "uix-sharp:concert-star",
	});
}

export default Component;
