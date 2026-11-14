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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.irm3dubeh {
  d: path("M10.5 7.75c-.75-.5-1.75-.25-1.75.75L8 15.75q-.375 1.5-1.5.75m.25-5.5H10m1.75 0L16 16m0-5l-4.25 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="irm3dubeh"/></g>`,
		"fallback": "uix-sharp:field-calculated",
	});
}

export default Component;
