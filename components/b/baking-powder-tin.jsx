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
		"content": `<style>.wd26-jcof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 7h4.25A2.625 2.625 0 0 1 12.5 9.625v9.25A2.625 2.625 0 0 1 9.875 21.5h-4.25A2.625 2.625 0 0 1 3 18.875v-9.25A2.625 2.625 0 0 1 5.625 7M4.25 3.5h7A1.75 1.75 0 0 1 13 5.25A1.75 1.75 0 0 1 11.25 7h-7A1.75 1.75 0 0 1 2.5 5.25A1.75 1.75 0 0 1 4.25 3.5M3 11.5h9.5M3 17h9.5m3 0h6a3 3 0 0 1-6 0m2.5 0l-5.5-2.75");
}
</style><path class="wd26-jcof"/>`,
		"fallback": "uix:baking-powder-tin",
	});
}

export default Component;
