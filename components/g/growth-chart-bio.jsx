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
		"content": `<style>.kftax2b9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15H6v6.5H2.5Zm6.25-5.5h3.5v12h-3.5ZM15 12.4V3h3.5v9.7m-2.6 8.8H15v-1.3m3.75 1.8v-4.25m0 .5c-2.5 0-3.25-1.25-3.25-3c2.25 0 3.25 1 3.25 3m0-.5c0-2 1-3 3.25-3c0 2.25-1.25 3-3.25 3");
}
</style><path class="kftax2b9x"/>`,
		"fallback": "uix-sharp:growth-chart-bio",
	});
}

export default Component;
