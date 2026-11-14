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
		"content": `<style>.ay1h40bbz {
  d: path("M3 7h18v13H3Zm5.5 0V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7");
}

.p15qjka4g {
  d: path("m12 10l3 1v2c0 1.9-1.25 3-3 3.75C10.25 16 9 14.9 9 13v-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ay1h40bbz"/><path class="p15qjka4g"/></g>`,
		"fallback": "uix-sharp:business-insurance",
	});
}

export default Component;
