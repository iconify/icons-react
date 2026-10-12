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
		"content": `<style>.g11y-v37c {
  cx: 16.75px;
  cy: 7.25px;
  r: 4.5px;
}

.ghx4t3bny {
  d: path("M16.75 5.25v2l1.5 1");
}

.m9kyy-b1p {
  d: path("M2.75 8.75h11.5v12.5H2.75zm5.75 0v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m9kyy-b1p"/><circle class="g11y-v37c"/><path class="ghx4t3bny"/></g>`,
		"fallback": "iconoven:food-delivery-clock-sharp",
	});
}

export default Component;
