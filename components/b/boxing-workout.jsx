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
		"content": `<style>.kox7k4x-v {
  d: path("M6 12h3.5a2 2 0 0 1 0 4H7m0 3h9.5v2.5H7Z");
}

.smd5nc9bz {
  d: path("M6 11a6 6 0 0 1 12-1.5V13a6 6 0 0 1-6 6H9a3 3 0 0 1-3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="smd5nc9bz"/><path class="kox7k4x-v"/></g>`,
		"fallback": "uix-sharp:boxing-workout",
	});
}

export default Component;
