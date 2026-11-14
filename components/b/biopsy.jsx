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
		"content": `<style>.i9ku_db0s {
  d: path("m16.305 2.038l5.657 5.657l-1.767 1.767l-5.657-5.657ZM16.5 7.5l-9.25 9.25M6 18l-2.5 2.5");
}

.k1i4i6qcp {
  fill: currentColor;
  d: path("m6.25 17.75l1-1L8 18.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i9ku_db0s"/><path class="k1i4i6qcp"/></g>`,
		"fallback": "uix-sharp:biopsy",
	});
}

export default Component;
