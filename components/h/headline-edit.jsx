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
		"content": `<style>.axtfm4u2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.1 10.5H2.5v-7h19v7h-2.1M6.5 7h11M3 15.5h8m3.25 6.25l.5-3l4.5-4.5l2.5 2.5l-4.5 4.5Z");
}
</style><path class="axtfm4u2u"/>`,
		"fallback": "uix-sharp:headline-edit",
	});
}

export default Component;
