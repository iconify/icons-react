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
		"content": `<style>.gf0u97bud {
  d: path("M13.601 21H3.5V10L12 3.5l8.5 6.5v2.999M9.5 21v-5.5");
}

.ps43subya {
  d: path("m18 21.5l-3-3a2.25 2.25 0 0 1 3-2.75a2.25 2.25 0 0 1 3 2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gf0u97bud"/><path class="ps43subya"/></g>`,
		"fallback": "uix-sharp:community-service",
	});
}

export default Component;
