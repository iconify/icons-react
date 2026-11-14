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
		"content": `<style>.q5q4_bbdl {
  d: path("m4 10.5l8-7l8 7V20H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7_8trrbx {
  d: path("M9.5 20v-4a2.5 2.5 0 0 1 5 0v4");
}
</style><g class="ulnmmdpxh"><path class="q5q4_bbdl"/><path class="x7_8trrbx"/></g>`,
		"fallback": "uix-sharp:house",
	});
}

export default Component;
