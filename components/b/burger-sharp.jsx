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
		"content": `<style>.b9e079cmc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 7h.01m4.99 0h.01");
}

.pit_b0lef {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10a8 6.5 0 0 1 16 0v1H4zm-.25 4.25c1.4 0 1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1M4 17.25h16v4H4z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pit_b0lef"/><path class="b9e079cmc"/></g>`,
		"fallback": "iconoven:burger-sharp",
	});
}

export default Component;
