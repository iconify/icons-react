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
		"content": `<style>.h318eobts {
  d: path("M3.5 2.5h17v19h-17Zm8.5 0v8m0 3v8");
}

.rp-egfbrz {
  d: path("M8 10.5h8v3H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h318eobts"/><path class="rp-egfbrz"/></g>`,
		"fallback": "uix-sharp:cabinet-latch",
	});
}

export default Component;
