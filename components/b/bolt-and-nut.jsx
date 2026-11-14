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
		"content": `<style>.h6wu_qbyi {
  d: path("M3 2.5h8v4H3Zm2 4v13a2 2 0 0 0 4 0v-13m8 3l3.897 2.25v4.5L17 18.5l-3.897-2.25v-4.5Zm-12 1l4-1m-4 4l4-1m-4 4l4-1");
}

.i9f_qzbgs {
  d: path("M15.25 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h6wu_qbyi"/><path class="i9f_qzbgs"/></g>`,
		"fallback": "uix-sharp:bolt-and-nut",
	});
}

export default Component;
