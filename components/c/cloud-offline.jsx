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
		"content": `<style>.xo4aywmkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.965 18.364a4 4 0 0 1 0-7.728m1.367-1.517a5.5 5.5 0 0 1 7.918-2.882m1.463 1.228a5.5 5.5 0 0 1 1.266 3.056m1 1.307a3.5 3.5 0 0 1-.573 6.553M9.5 18.5h5");
}
</style><path class="xo4aywmkr"/>`,
		"fallback": "uix:cloud-offline",
	});
}

export default Component;
