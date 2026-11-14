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
		"content": `<style>.hs-viwb7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-7.5h16a2 2 0 0 1 2 2V20M3 16.5h18M5.5 8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M11 12.5V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2.5");
}
</style><path class="hs-viwb7z"/>`,
		"fallback": "uix:bed-occupied",
	});
}

export default Component;
