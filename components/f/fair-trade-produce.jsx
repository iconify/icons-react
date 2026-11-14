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
		"content": `<style>.ginqp6b5d {
  d: path("M3 11h18l-1 10H4Z");
}

.jkep-nb2s {
  d: path("M4.75 7.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM14.5 11l-1-6.5m3 6.5V3.5m2 7.5l1-6.5M9.5 16a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ginqp6b5d"/><path class="jkep-nb2s"/></g>`,
		"fallback": "uix-sharp:fair-trade-produce",
	});
}

export default Component;
