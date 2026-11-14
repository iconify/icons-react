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
		"content": `<style>.u0twtl96g {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9g_sxbiw {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M14 2.5V10l2.25-1.5L18.5 10V2.5");
}
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="w9g_sxbiw"/></g>`,
		"fallback": "uix-sharp:bookmarked-lesson",
	});
}

export default Component;
