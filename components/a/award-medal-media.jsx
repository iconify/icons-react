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
		"content": `<style>.oic8rwblz {
  d: path("M5.5 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.pa_p-mdjv {
  d: path("M9 8.75L6.5 2.5h3.75L12 6.75l1.75-4.25h3.75L15 8.75M10.5 12l4.5 2.5l-4.5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oic8rwblz"/><path class="pa_p-mdjv"/></g>`,
		"fallback": "uix-sharp:award-medal-media",
	});
}

export default Component;
