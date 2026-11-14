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
		"content": `<style>.mzor9qs3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-11 7.5c-5 2.5-5 10 1.5 10s6.5-7.5 1.5-10ZM12 3v7.5M17 3l2.5 2.5");
}
</style><path class="mzor9qs3j"/>`,
		"fallback": "uix:bear-bag-hang",
	});
}

export default Component;
