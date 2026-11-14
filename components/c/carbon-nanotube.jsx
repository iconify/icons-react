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
		"content": `<style>.hgo9j8bcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 7 0 1 0 4 0a2 7 0 1 0-4 0Zm2-7h15m-15 14h15m0-14a2 7 0 0 1 0 14M17 12l-1.75 3h-3.5L10 12l1.75-3h3.5Z");
}
</style><path class="hgo9j8bcg"/>`,
		"fallback": "uix-sharp:carbon-nanotube",
	});
}

export default Component;
