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
		"content": `<style>.xwt0vidfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.9 3.66l.2-.07Q7.75 3 8.34 4.65l2.07 5.7q.59 1.65 0 3.3l-2.07 5.7Q7.75 21 6.1 20.41l-.2-.07q-1.65-.59-1.02-2.22l1.74-4.49q.63-1.63 0-3.26L4.88 5.88Q4.25 4.25 5.9 3.66m12.2 0l-.2-.07Q16.25 3 15.66 4.65l-2.07 5.7q-.59 1.65 0 3.3l2.07 5.7q.59 1.65 2.24 1.06l.2-.07q1.65-.59 1.02-2.22l-1.74-4.49q-.63-1.63 0-3.26l1.74-4.49q.63-1.63-1.02-2.22M5.3 7h3.9m5.6 0h3.9M5.3 17h3.9m5.6 0h3.9");
}
</style><path class="xwt0vidfr"/>`,
		"fallback": "iconoven:genome",
	});
}

export default Component;
