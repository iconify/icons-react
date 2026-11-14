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
		"content": `<style>.bj1103bru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 21.5l3.75-18h2.5l2.117 11.724M3 7h16M4.5 12h10.7m2.8 2.5v7m-3-3l3 3l3-3");
}
</style><path class="bj1103bru"/>`,
		"fallback": "uix-sharp:demand-response",
	});
}

export default Component;
