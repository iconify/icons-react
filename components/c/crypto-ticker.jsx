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

.r5xosisrz {
  d: path("M5.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.25 3l2.25-2.5l1.75 1.25l2-4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="r5xosisrz"/></g>`,
		"fallback": "uix-sharp:crypto-ticker",
	});
}

export default Component;
