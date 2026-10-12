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
		"content": `<style>.h8jqndbwc {
  d: path("M4.75 2.75h14.5v18.5H4.75zm3.5 3.75h7.5");
}

.nacvh6tbl {
  d: path("m13.71 11.79l-.435-1.08H10.29v1.33c0 1.77 3.56.99 3.56 2.88v1.36h-3.18l-.54-1.08M12 9.63v1.08m0 5.58v1.08");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h8jqndbwc"/><path class="nacvh6tbl"/></g>`,
		"fallback": "iconoven:billing-sharp",
	});
}

export default Component;
