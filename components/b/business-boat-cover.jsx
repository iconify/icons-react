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
		"content": `<style>.w-3-zkjrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18l-2.5 4h-13Zm9-12.75V15.5m-2-11V13H4.5Zm8-1.25l3 1.25v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V4.5Z");
}
</style><path class="w-3-zkjrl"/>`,
		"fallback": "uix-sharp:business-boat-cover",
	});
}

export default Component;
