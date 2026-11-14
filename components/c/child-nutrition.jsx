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
		"content": `<style>.bcpxpnbwz {
  d: path("M2.25 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.pqv5tc6_w {
  d: path("M5.25 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0V7.5m0 4.5l3.75 2.5M9.75 12L6 14.5M18.75 6a1.5 2.5 0 1 0 3 0a1.5 2.5 0 1 0-3 0Zm1.5 2.5v12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bcpxpnbwz"/><path class="pqv5tc6_w"/></g>`,
		"fallback": "uix-sharp:child-nutrition",
	});
}

export default Component;
