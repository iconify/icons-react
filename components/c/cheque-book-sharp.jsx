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
		"content": `<style>.h18nr6blm {
  d: path("m14 16.75l1.25-2l1.25 2l1.25-2l1.25 2");
}

.qk7pnqjfv {
  d: path("M4.25 2.75h15.5M3.5 5.25h17M2.75 7.75h18.5v12.5H2.75zm4.5 2.5v1m0 2v1m0 2v1m2.75-5.5h4.5m2 0h1.75M10 16.25h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qk7pnqjfv"/><path class="h18nr6blm"/></g>`,
		"fallback": "iconoven:cheque-book-sharp",
	});
}

export default Component;
