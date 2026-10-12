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
		"content": `<style>.ukso8bc3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 15l.9-8.85a1 1 0 0 1 1-.9H8a1 1 0 0 1 1 1.1L8 15m2.5 0l.9-9.85a1 1 0 0 1 1-.9h.85a1 1 0 0 1 1 1.1l-1 9.65m2.5 0l.9-8.85a1 1 0 0 1 1-.9h.85a1 1 0 0 1 1 1.1l-1 8.65M2.75 15h18.5v2.25a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3Zm3.5 1.9v1.35m5.5-1.35v1.35m5.5-1.35v1.35");
}
</style><path class="ukso8bc3q"/>`,
		"fallback": "iconoven:dish-rack",
	});
}

export default Component;
