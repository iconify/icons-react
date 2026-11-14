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
		"content": `<style>.rz2x4_bzn {
  d: path("M6 5c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5v9c0 1.4-2.7 2.5-6 2.5S6 15.4 6 14ZM2.5 18.75h19v2.75h-19Z");
}

.u07z_mbhy {
  d: path("M6 5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5M6 9.75c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rz2x4_bzn"/><path class="u07z_mbhy"/></g>`,
		"fallback": "uix-sharp:data-platform",
	});
}

export default Component;
