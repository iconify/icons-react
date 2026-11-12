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
		"content": `<style>.g56u1es1x {
  stroke-linejoin: round;
  d: path("M19 14v6m0 0l2-2m-2 2l-2-2");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5_bbwren {
  d: path("M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m0 12H6m7 0h-.5M2 10h5m15 0H11");
}
</style><g class="ipq1z-bjh"><path class="g56u1es1x"/><path class="o5_bbwren"/></g>`,
		"fallback": "solar:card-recive-broken",
	});
}

export default Component;
