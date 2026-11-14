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
		"content": `<style>.di1qfsbnu {
  d: path("M13 6.75L9.5 10.5H12l-1 2.75l3.5-3.75H12ZM6 16v3.5m4-3.5v3.5m4-3.5v3.5m4-3.5v3.5");
}

.g4e_094uf {
  d: path("M2.5 4h19v12h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g4e_094uf"/><path class="di1qfsbnu"/></g>`,
		"fallback": "uix-sharp:in-memory-cache",
	});
}

export default Component;
