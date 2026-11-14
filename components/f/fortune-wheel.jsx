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
		"content": `<style>.c7e-44b1s {
  d: path("M5 14.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM9.5 2h5L12 4.75Z");
}

.qv1dy3bzv {
  d: path("M10 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h5m-9 0H5m8 1.75l2.5 4.25M11 16.25L8.5 20.5m2.5-7.75L8.5 8.5m4.5 4.25l2.5-4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c7e-44b1s"/><path class="qv1dy3bzv"/></g>`,
		"fallback": "uix-sharp:fortune-wheel",
	});
}

export default Component;
