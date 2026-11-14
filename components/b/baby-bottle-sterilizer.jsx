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
		"content": `<style>.iojcthxpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7V5a2 2 0 0 1 4 0v2M6.25 7h5.5A1.25 1.25 0 0 1 13 8.25a1.25 1.25 0 0 1-1.25 1.25h-5.5A1.25 1.25 0 0 1 5 8.25A1.25 1.25 0 0 1 6.25 7M5.5 9.5V19A2.5 2.5 0 0 0 8 21.5h2a2.5 2.5 0 0 0 2.5-2.5V9.5m4 8.5c-1.5-2 1.5-4 0-6s1.5-4 0-6m3.75 12c-1.5-2 1.5-4 0-6s1.5-4 0-6");
}
</style><path class="iojcthxpj"/>`,
		"fallback": "uix:baby-bottle-sterilizer",
	});
}

export default Component;
