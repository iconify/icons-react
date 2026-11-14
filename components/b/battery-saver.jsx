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
		"content": `<style>.nawkhbc0k {
  d: path("M7 14.5c0-3 2.25-5 7-5c0 3-2 5-7 5Z");
}

.ub29l-bqr {
  d: path("M2.5 7H19v10H2.5Zm19 3.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ub29l-bqr"/><path class="nawkhbc0k"/></g>`,
		"fallback": "uix-sharp:battery-saver",
	});
}

export default Component;
