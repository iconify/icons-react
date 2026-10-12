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
		"content": `<style>.n2quqjbei {
  d: path("m13 7.75l1.25-.937l1.25.937l1.25.937L18 7.75M2.75 9.5v4.75m0 0h18.5v4H2.75zM5 11h4.5v3.25H5zm-.25 7.25v3m14.5-3v3");
}

.s7etx_b3c {
  cx: 15.5px;
  cy: 7.5px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="s7etx_b3c"/><path class="n2quqjbei"/></g>`,
		"fallback": "iconoven:cabin-cruise-sharp",
	});
}

export default Component;
