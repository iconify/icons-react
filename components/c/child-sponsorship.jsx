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
		"content": `<style>.j16d_s8wc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 12C5 8.5 5.5 3 9 3.5c1 .1 1.6.8 2 1.5c.4-.7 1-1.4 2-1.5c3.5-.5 4 5-2 8.5Zm-8.5 2H5l3 1.5h2a1.5 1.5 0 0 1 0 3H7.5m-5 2.5h7m6.5-5.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}
</style><path class="j16d_s8wc"/>`,
		"fallback": "uix-sharp:child-sponsorship",
	});
}

export default Component;
