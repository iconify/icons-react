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
		"content": `<style>.accbv0bzp {
  d: path("m2.5 6.75l8 4.25l8-4.25m-8 4.25v9.5m7.5-5.75v3.5M18 21h.01");
}

.pbwfr0bwn {
  d: path("M15.196 18.005L10.5 20.5l-8-4.25v-9.5l8-4.25l8 4.25v5.241");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pbwfr0bwn"/><path class="accbv0bzp"/></g>`,
		"fallback": "uix-sharp:deliverable-at-risk",
	});
}

export default Component;
