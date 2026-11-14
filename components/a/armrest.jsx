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
		"content": `<style>.kn4_f8ovk {
  d: path("M5.5 9H13v3H5.5Z");
}

.pt_--cc_a {
  d: path("M14.5 2.5H18A1.5 1.5 0 0 1 19.5 4l-1 15a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19v-2.5A1.5 1.5 0 0 1 5 15h8V4a1.5 1.5 0 0 1 1.5-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pt_--cc_a"/><path class="kn4_f8ovk"/></g>`,
		"fallback": "uix-sharp:armrest",
	});
}

export default Component;
