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
		"content": `<style>.e-xti72pq {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4m-13 3h18");
}

.myeutd6ys {
  d: path("m7 18l3.5-3.5l3 1.5l3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e-xti72pq"/><path class="myeutd6ys"/></g>`,
		"fallback": "uix-sharp:altcoin-season",
	});
}

export default Component;
