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
		"content": `<style>.jo8l0n71h {
  d: path("m15 10.5l2-3c2.5-.5 3-3 1.5-4.5M17 7.5c-2.5-.5-2.75-3-1.75-4.5M6.5 12L3 10.5M6 14H2.5m4 2L3 17.5m5 0l-3 3M17.5 12l3.5-1.5M18 14h3.5m-4 2l3.5 1.5m-5 0l3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0euvbc6c {
  d: path("M6 14a6 4 0 1 0 12 0a6 4 0 1 0-12 0Zm3-3.5l-2-3C4.5 7 4 4.5 5.5 3M7 7.5C9.5 7 9.75 4.5 8.75 3");
}
</style><g class="ulnmmdpxh"><path class="y0euvbc6c"/><path class="jo8l0n71h"/></g>`,
		"fallback": "uix-sharp:crustacean",
	});
}

export default Component;
