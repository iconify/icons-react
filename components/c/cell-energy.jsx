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
		"content": `<style>.bqddp2b0w {
  d: path("M2.5 12a9.5 8 0 1 0 19 0a9.5 8 0 1 0-19 0Z");
}

.tzg_62tux {
  d: path("M13.5 5.75L8 13h3.5l-1 5.25L16 11h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bqddp2b0w"/><path class="tzg_62tux"/></g>`,
		"fallback": "uix-sharp:cell-energy",
	});
}

export default Component;
