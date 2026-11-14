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
		"content": `<style>.fpqrktb0o {
  d: path("M13 21.5H3V6h13v4.7");
}

.fy-aryf1k {
  d: path("M7 3h10.5A2.5 2.5 0 0 1 20 5.5V11M6.5 11h6m-6 4H10m3.5 1.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm5.75 2.5l2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fpqrktb0o"/><path class="fy-aryf1k"/></g>`,
		"fallback": "uix-sharp:code-review-queue",
	});
}

export default Component;
