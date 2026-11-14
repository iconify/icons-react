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
		"content": `<style>.zcylo5bia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 19c0-3.5 2-5 4.5-5s4.5 1.5 4.5 5m3-11.5h7m-7 4.5h7m-7 4.5H19");
}
</style><path class="zcylo5bia"/>`,
		"fallback": "uix-sharp:influencer-list",
	});
}

export default Component;
