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
		"content": `<style>.mcfo0f-ee {
  d: path("M21 2.5q-8 9.5 0 19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zd4_f1f_i {
  d: path("M3 9h14.5L9 3.5M3 15h14.5L9 20.5");
}
</style><g class="ulnmmdpxh"><path class="mcfo0f-ee"/><path class="zd4_f1f_i"/></g>`,
		"fallback": "uix-sharp:convex-mirror",
	});
}

export default Component;
