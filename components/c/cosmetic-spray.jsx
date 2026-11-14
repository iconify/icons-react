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
		"content": `<style>.y6ayt9bdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h8v10.5h-8Zm2 0V5.5A1.5 1.5 0 0 1 8 4h6.5v3.5h-4V11m2.25-3.5L15 11m3-8h.01m2.49 2.75h.01M18 8.5h.01");
}
</style><path class="y6ayt9bdc"/>`,
		"fallback": "uix-sharp:cosmetic-spray",
	});
}

export default Component;
