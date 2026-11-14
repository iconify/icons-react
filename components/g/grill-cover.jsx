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
		"content": `<style>.ekqb5lrvh {
  d: path("M10.5 4.75v-2h3v2M6 14c0 3 2.5 4.5 6 4.5s6-1.5 6-4.5m-9 4l-2 3.5m8-3.5l2 3.5");
}

.p7tc_nbhy {
  d: path("M3.5 14q1-1 1-2a7.5 7.5 0 0 1 15 0q0 1 1 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p7tc_nbhy"/><path class="ekqb5lrvh"/></g>`,
		"fallback": "uix-sharp:grill-cover",
	});
}

export default Component;
