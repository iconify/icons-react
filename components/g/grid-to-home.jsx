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
		"content": `<style>.d_04zrb3q {
  d: path("M11.823 20.5H3V10l8.5-7l8.5 7v1.277");
}

.gotz1cb7r {
  d: path("M7.5 20.5v-5H11v5m4-4.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_04zrb3q"/><path class="gotz1cb7r"/></g>`,
		"fallback": "uix-sharp:grid-to-home",
	});
}

export default Component;
