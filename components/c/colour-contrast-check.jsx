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
		"content": `<style>.u-8_f8bne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h8v8h-8Zm11 0h8v8h-8Zm-11 13H10m-7.5 4H7m7.75-2.5l2 2L21 15.75");
}
</style><path class="u-8_f8bne"/>`,
		"fallback": "uix-sharp:colour-contrast-check",
	});
}

export default Component;
