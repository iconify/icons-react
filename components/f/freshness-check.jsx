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
		"content": `<style>.aq2i5ccus {
  d: path("M4 20C4 11 9.5 4 20 4c0 10.5-7 16-16 16Z");
}

.ima6n9biw {
  d: path("M8.5 12.5L11 15l4.5-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aq2i5ccus"/><path class="ima6n9biw"/></g>`,
		"fallback": "uix-sharp:freshness-check",
	});
}

export default Component;
