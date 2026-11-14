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
		"content": `<style>.p9ui0b6yl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20 2.5l-12 12m-4-12l11 11m-6-2l2 2m2 0l2-2m-.75 6.5L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><path class="p9ui0b6yl"/>`,
		"fallback": "uix-sharp:fencing-hall",
	});
}

export default Component;
