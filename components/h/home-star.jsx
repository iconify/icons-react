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
		"content": `<style>.ke3z5xabi {
  d: path("m12 10.5l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L12 15.75l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.q5q4_bbdl {
  d: path("m4 10.5l8-7l8 7V20H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q5q4_bbdl"/><path class="ke3z5xabi"/></g>`,
		"fallback": "uix-sharp:home-star",
	});
}

export default Component;
