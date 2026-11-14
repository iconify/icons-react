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
		"content": `<style>.mwgp8757t {
  d: path("m6.5 9.5l4 4.5l7-4m-7 4l2 6.5m6-18.25q0 2.5 2.5 2.5q-2.5 0-2.5 2.5q0-2.5-2.5-2.5q2.5 0 2.5-2.5Z");
}

.r6551jbgd {
  d: path("m3 15l3.5-5.5L12 8l5.5 2l3.5 5.5l-3 5H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r6551jbgd"/><path class="mwgp8757t"/></g>`,
		"fallback": "uix-sharp:gold-nugget",
	});
}

export default Component;
