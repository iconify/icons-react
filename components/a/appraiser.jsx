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
		"content": `<style>.h0odp_bth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.917 3.357-6.396 7.723-6.497M14.5 14.5h4l3.25 3.25l-4 4l-3.25-3.25Zm2.25 2.25h.01");
}
</style><path class="h0odp_bth"/>`,
		"fallback": "uix-sharp:appraiser",
	});
}

export default Component;
