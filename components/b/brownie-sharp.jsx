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
		"content": `<style>.cqz8_zmji {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5L7 9l2.5 1L12 8.75l2.5 1L17 8.5l2.5 1.25V20.5h-15v-2Z");
}

.h9qnlab5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 14h.01m5.99-.75h.01M11.75 17h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="cqz8_zmji"/><path class="h9qnlab5j"/></g>`,
		"fallback": "iconoven:brownie-sharp",
	});
}

export default Component;
