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
		"content": `<style>.wbj2krbsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 3.5l8 8l-3 3l-8-8ZM13 13l3 3M2.5 7.5l5-5M5 5L3 3m17 13h.01M19 19h.01M16 20h.01");
}
</style><path class="wbj2krbsn"/>`,
		"fallback": "uix-sharp:air-water-syringe",
	});
}

export default Component;
