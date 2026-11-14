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
		"content": `<style>.e5-aym2wc {
  d: path("M8.5 21.5L12 8.75l3.224 11.744");
}

.ops3h0bcb {
  d: path("M10.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.25-3.75a6 6 0 0 1 0 7.5m-9-7.5a6 6 0 0 0 0 7.5M18 14.5V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e5-aym2wc"/><path class="ops3h0bcb"/></g>`,
		"fallback": "uix-sharp:alert-broadcast",
	});
}

export default Component;
