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
		"content": `<style>.n36e2xbrw {
  d: path("M10 17H4.75a2.25 2.25 0 0 0 0 4.5H10a1.25 2.25 0 0 0 0-4.5a1.25 2.25 0 0 0 0 4.5");
}

.omm23jbcc {
  d: path("M20.25 17H13.5a2.25 2.25 0 0 0 0 4.5h6.75a1.25 2.25 0 0 0 0-4.5a1.25 2.25 0 0 0 0 4.5m-5.5-9h-5.5a2.25 2.25 0 0 0 0 4.5h5.5a1.25 2.25 0 0 0 0-4.5a1.25 2.25 0 0 0 0 4.5m-3.25-4.5v-4c0-3.5 3-6 7.5-6c0 4-3 6-7.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n36e2xbrw"/><path class="omm23jbcc"/></g>`,
		"fallback": "uix-sharp:biomass",
	});
}

export default Component;
