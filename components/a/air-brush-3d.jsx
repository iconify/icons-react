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
		"content": `<style>.gnk9y_bry {
  d: path("M20.5 3.5L13 11m-1.45 6.46c-1.931 1.686-4.674 2.759-8.05 3.04c.5-6 3.5-10 8-11l3 3l-.037.158M18 14.5l3 1.75v3.5l-3 1.75l-3-1.75v-3.5Z");
}

.n_95hacow {
  d: path("M15 16.25L18 18l3-1.75M18 18v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gnk9y_bry"/><path class="n_95hacow"/></g>`,
		"fallback": "uix-sharp:air-brush-3d",
	});
}

export default Component;
