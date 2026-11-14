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
		"content": `<style>.y2w_xbcso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM11 9.25C9 10.5 8.25 12.5 8.5 15L7 21.5M8.5 15l2.5 6.5M10.25 10L14 13.5m0 0a1.75 1.75 0 0 1 3.5 0v8");
}
</style><path class="y2w_xbcso"/>`,
		"fallback": "uix-sharp:ageing",
	});
}

export default Component;
