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
		"content": `<style>.e5fm14bgk {
  d: path("M14.5 7.75c-.5-1-1.25-1.25-2-1.25c-1.25 0-1.75 1-1.75 2v3.25c0 1-.5 1.5-1.25 1.75h5m-5-3H13");
}

.tue2cdcnq {
  d: path("M4 10a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm8 8v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tue2cdcnq"/><path class="e5fm14bgk"/></g>`,
		"fallback": "uix-sharp:congestion-charge-sign",
	});
}

export default Component;
