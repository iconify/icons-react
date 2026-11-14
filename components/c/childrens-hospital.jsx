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
		"content": `<style>.ly1eq_b7s {
  d: path("M6.75 21.5v-5h3.5v5M8.5 5.5v5M6 8h5m6.25 6.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM16 21.5c0-1.5 1.5-2.5 3.25-2.5S22 20 22 21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybqk6cqxt {
  d: path("M13.2 21.5H2.5v-19h12v11.6m0 .3v3.8");
}
</style><g class="ulnmmdpxh"><path class="ybqk6cqxt"/><path class="ly1eq_b7s"/></g>`,
		"fallback": "uix-sharp:childrens-hospital",
	});
}

export default Component;
