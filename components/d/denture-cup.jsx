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
		"content": `<style>.mup1akhbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 11l1 8.5A2 2 0 0 0 8 21h8a2 2 0 0 0 2-1.5l1-8.5M3.5 7.5h17V11h-17Zm5-5c0 2.75 7 2.75 7 0");
}
</style><path class="mup1akhbm"/>`,
		"fallback": "uix-sharp:denture-cup",
	});
}

export default Component;
