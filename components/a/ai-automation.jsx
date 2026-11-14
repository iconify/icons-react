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
		"content": `<style>.cffl8wb0h {
  d: path("m11.5 5l1.25-1.75l2.5 1l-.5 2.25l.75.75l2.25-.5l1 2.5L17 10.5v1l1.75 1.25l-1 2.5l-2.25-.5l-.75.75l.5 2.25l-2.5 1L11.5 17h-1l-1.25 1.75l-2.5-1l.5-2.25l-.75-.75l-2.25.5l-1-2.5L5 11.5v-1L3.25 9.25l1-2.5l2.25.5l.75-.75l-.5-2.25l2.5-1L10.5 5Z");
}

.qe0m86bnq {
  d: path("M8.25 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm10.25 4.5q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cffl8wb0h"/><path class="qe0m86bnq"/></g>`,
		"fallback": "uix-sharp:ai-automation",
	});
}

export default Component;
