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
		"content": `<style>.u7qf4dppc {
  d: path("M10.75 10.25L9 12l1.75 1.75m2.5-3.5L15 12l-1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ut8e5qbqq {
  d: path("M2.5 3h19v18h-19Zm4 0v18m11-18v18M9 12h6");
}
</style><g class="ulnmmdpxh"><path class="ut8e5qbqq"/><path class="u7qf4dppc"/></g>`,
		"fallback": "uix-sharp:column-resize",
	});
}

export default Component;
