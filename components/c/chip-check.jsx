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
		"content": `<style>.bppnlvb5e {
  d: path("M6.5 3.5h11v17h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9rlzm11s {
  d: path("M14 3.5a2 2 0 0 1-4 0M2.5 8h4m-4 4h4m-4 4h4m11-8h4m-4 4h4m-4 4h4m-12-3.5l1.75 1.75L14.5 11");
}
</style><g class="ulnmmdpxh"><path class="bppnlvb5e"/><path class="x9rlzm11s"/></g>`,
		"fallback": "uix-sharp:chip-check",
	});
}

export default Component;
