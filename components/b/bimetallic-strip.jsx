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
		"content": `<style>.h04w61b7w {
  d: path("M3 13.75q9-7 18 0");
}

.nco8t8gvh {
  d: path("M3 17.5q9-7 18 0M3 10q9-7 18 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nco8t8gvh"/><path class="h04w61b7w"/></g>`,
		"fallback": "uix-sharp:bimetallic-strip",
	});
}

export default Component;
