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
		"content": `<style>.aogzw1bca {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.5h10V13H7zm3 0V3.25h4V5.5M2.75 16.25h18.5v4.5H2.75z");
}

.b1kf5xm6x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 18.5h.01m4.99 0h.01m4.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="aogzw1bca"/><path class="b1kf5xm6x"/></g>`,
		"fallback": "iconoven:baggage-claim-sharp",
	});
}

export default Component;
