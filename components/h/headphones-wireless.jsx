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
		"content": `<style>.gn-s3kbpz {
  d: path("M8.786 14.67a5 5 0 0 1 6.428 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnmffhmjy {
  d: path("M5 13.5v-1a7 7 0 0 1 14 0v1m-16 0h5v7H3Zm13 0h5v7h-5Zm-4 5h.01m-1.778-1.768a2.5 2.5 0 0 1 3.536 0");
}
</style><g class="ulnmmdpxh"><path class="xnmffhmjy"/><path class="gn-s3kbpz"/></g>`,
		"fallback": "uix-sharp:headphones-wireless",
	});
}

export default Component;
