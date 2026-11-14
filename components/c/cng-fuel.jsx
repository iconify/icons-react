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
		"content": `<style>.idcvkvolq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5za4.5 4.5 0 0 1 4.5 4.5v6A4.5 4.5 0 0 1 8 21.5A4.5 4.5 0 0 1 3.5 17v-6A4.5 4.5 0 0 1 8 6.5m0 0V3M6 3h4m8.5 10.5c.5 1.5 3 2.5 3 5a3 3 0 0 1-6 0c0-1.5 1-2.25 1.5-3c.25 1 .75 1.5 1.25 1.5c.5-1 .5-2.25.25-3.5");
}
</style><path class="idcvkvolq"/>`,
		"fallback": "uix:cng-fuel",
	});
}

export default Component;
