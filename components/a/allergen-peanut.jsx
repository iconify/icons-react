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
		"content": `<style>.prcgqp-2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10.5c-2-2-1-8 3.5-8s5.5 6 3.5 8c2.5 2 2 9.5-3.5 9.5s-6-7.5-3.5-9.5m12 4V18m0 3h.01");
}
</style><path class="prcgqp-2j"/>`,
		"fallback": "uix:allergen-peanut",
	});
}

export default Component;
