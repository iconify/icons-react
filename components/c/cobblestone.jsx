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
		"content": `<style>.h0lqpusly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h10v7h-10Zm12.75 0h6.25v7h-6.25ZM2.5 13.75h6.25v7H2.5Zm9 0h10v7h-10Z");
}
</style><path class="h0lqpusly"/>`,
		"fallback": "uix-sharp:cobblestone",
	});
}

export default Component;
