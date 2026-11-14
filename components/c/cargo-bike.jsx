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
		"content": `<style>.g94-g3bpq {
  d: path("M5 17.5L9.5 11l2.5 6.5h7m-7-12h7v6h-7Z");
}

.lg1lcp0ll {
  d: path("M2 17.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm14 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lg1lcp0ll"/><path class="g94-g3bpq"/></g>`,
		"fallback": "uix-sharp:cargo-bike",
	});
}

export default Component;
