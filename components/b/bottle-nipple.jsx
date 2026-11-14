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
		"content": `<style>.n515tlb1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.5c0-3 2.5-4 4.5-4.5V5a2.5 2.5 0 0 1 5 0v5c2 .5 4.5 1.5 4.5 4.5m-15.5 0h17V18h-17ZM3 21h18");
}
</style><path class="n515tlb1s"/>`,
		"fallback": "uix-sharp:bottle-nipple",
	});
}

export default Component;
