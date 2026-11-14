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
		"content": `<style>.ioak956qk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12c3-6 6-6 9.5 0s6.5 6 9.5 0M4.75 8.75l-1.5-1.5m4 .25v-3m2.5 4.25l1.5-1.5m3 8l-1.5 1.5m4-.25v3m2.5-4.25l1.5 1.5");
}
</style><path class="ioak956qk"/>`,
		"fallback": "uix-sharp:craft-pipe-cleaner",
	});
}

export default Component;
