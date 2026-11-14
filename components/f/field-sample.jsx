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
		"content": `<style>.grvyan2pm {
  d: path("M8.5 3h7A1.5 1.5 0 0 1 17 4.5A1.5 1.5 0 0 1 15.5 6h-7A1.5 1.5 0 0 1 7 4.5A1.5 1.5 0 0 1 8.5 3m1.875 5.75h3.25A4.375 4.375 0 0 1 18 13.125v4a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125v-4a4.375 4.375 0 0 1 4.375-4.375");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mmge5mg2s {
  d: path("M9 18c0-2.75 1.25-4 3-4s3 1.25 3 4Z");
}
</style><g class="hntgybcog"><path class="grvyan2pm"/><path class="mmge5mg2s"/></g>`,
		"fallback": "uix:field-sample",
	});
}

export default Component;
