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
		"content": `<style>.ct3ga3djn {
  d: path("M5.5 21v-3a6.5 3 0 0 1 13 0v3m-2-10.5c-1.5-2.25-4.5-2.25-6.25 0L7.5 8.75v3.5l2.75-1.75c1.75 2.25 4.75 2.25 6.25 0Z");
}

.j0r-5jaco {
  d: path("M2.5 3v16a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j0r-5jaco"/><path class="ct3ga3djn"/></g>`,
		"fallback": "uix-sharp:aquarium-tunnel",
	});
}

export default Component;
