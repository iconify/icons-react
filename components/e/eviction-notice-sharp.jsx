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
		"content": `<style>.g17ort2zz {
  d: path("m3.63 10.12l4.24-4.24l.88-.88l.88.88l4.24 4.24l.88.88v10.25h-12V11z");
}

.oln1fvn4k {
  d: path("M6.75 21v-5.5h4V21m5.75-5.5h4.75M19 13.25l2.25 2.25L19 17.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="g17ort2zz"/><path class="oln1fvn4k"/></g>`,
		"fallback": "iconoven:eviction-notice-sharp",
	});
}

export default Component;
