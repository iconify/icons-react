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
		"content": `<style>.g7wrg1b7s {
  d: path("M6.5 8C8 6 9.5 9 11 7c1.5-1.5 3 1 6.5-.5");
}

.u_-hc4bdc {
  d: path("M2.5 3.5h19v13h-19Zm4.5 13L5 21m12-4.5l2 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u_-hc4bdc"/><path class="g7wrg1b7s"/></g>`,
		"fallback": "uix-sharp:chalkboard",
	});
}

export default Component;
