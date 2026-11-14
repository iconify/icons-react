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
		"content": `<style>.np7avljoq {
  d: path("M14.9 13.5H6.5v-4H15v3.8m2.75.7l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyu5bgb1q {
  d: path("M13 19.5H3.5v-13h15v2.8M11 6.5V2.75");
}
</style><g class="ulnmmdpxh"><path class="vyu5bgb1q"/><path class="np7avljoq"/></g>`,
		"fallback": "uix-sharp:hero-robot",
	});
}

export default Component;
