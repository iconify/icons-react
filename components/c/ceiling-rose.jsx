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
		"content": `<style>.wv-c9hbfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18m-14 0a5 3 0 0 0 10 0m-5 3V12m-4 4a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><path class="wv-c9hbfu"/>`,
		"fallback": "uix:ceiling-rose",
	});
}

export default Component;
