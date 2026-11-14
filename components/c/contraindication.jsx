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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgcmwfbrm {
  d: path("m14.475 5.99l3.535 3.535l-8.485 8.485l-3.535-3.535Z");
}

.znva7pegk {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm2.75-6.75l13.5 13.5");
}
</style><g class="ulnmmdpxh"><path class="znva7pegk"/><path class="xgcmwfbrm"/></g>`,
		"fallback": "uix-sharp:contraindication",
	});
}

export default Component;
