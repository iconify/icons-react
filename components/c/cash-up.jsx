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
		"content": `<style>.htphvib2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h7.5V7H4ZM7.75 7v2m6.351 5.5H2.5L4 9h16l.842 3.087M18.601 14.5h-3.7m-.801 7H2.5v-7h11.6m.8 0h3.8m2.8 5.2v1.8h-1.7M14 11.75h.01m2.99 0h.01M6.5 18h4m4 0l2.5 2.5l4.5-5");
}
</style><path class="htphvib2v"/>`,
		"fallback": "uix-sharp:cash-up",
	});
}

export default Component;
