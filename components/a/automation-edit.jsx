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
		"content": `<style>.dlmrbbqdr {
  d: path("M7.25 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm8.25 11.5v-2.25l4-4l2.25 2.25l-4 4Z");
}

.fnv-2vbzd {
  d: path("M15.708 15.133L13.5 14.25l-1.5 1l-.25 2.5h-3.5L8 15.25l-1.5-1l-2.5 1l-1.5-2.75l2-1.5V9l-2-1.5L4 4.75l2.5 1l1.5-1l.25-2.5h3.5l.25 2.5l1.5 1l2.5-1l1.5 2.75l-2 1.5v2l2 1.5l-1.028 1.885");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fnv-2vbzd"/><path class="dlmrbbqdr"/></g>`,
		"fallback": "uix-sharp:automation-edit",
	});
}

export default Component;
