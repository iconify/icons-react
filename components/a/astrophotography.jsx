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
		"content": `<style>.bqsyuubjy {
  d: path("M2.5 9a2 2 0 0 1 2-2h3L9 4.5h6L16.5 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.h2fch6p0t {
  d: path("m12 9.5l1.029 2.584l2.775.18l-2.14 1.777l.687 2.695L12 15.25l-2.351 1.486l.687-2.695l-2.14-1.777l2.775-.18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bqsyuubjy"/><path class="h2fch6p0t"/></g>`,
		"fallback": "uix-sharp:astrophotography",
	});
}

export default Component;
