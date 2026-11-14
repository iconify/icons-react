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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v86novb0e {
  d: path("M6 9.5h12a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3L13.5 16h-3L9 18.5H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z");
}

.yz41x8bfr {
  d: path("M3 12.5C-.5 3 24.5 3 21 12.5");
}
</style><g class="ulnmmdpxh"><path class="v86novb0e"/><path class="yz41x8bfr"/></g>`,
		"fallback": "uix-sharp:headset-strap",
	});
}

export default Component;
