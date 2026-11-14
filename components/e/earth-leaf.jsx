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
		"content": `<style>.dplbpebxb {
  d: path("M2.5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.kn5iicbvl {
  d: path("M6.5 9.5a3 7 0 1 0 6 0a3 7 0 1 0-6 0Zm-4 0h14M16 20c0-3.5 1.5-5 5-5c0 3.5-1.5 5-5 5Zm0 0l-1.25 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dplbpebxb"/><path class="kn5iicbvl"/></g>`,
		"fallback": "uix-sharp:earth-leaf",
	});
}

export default Component;
