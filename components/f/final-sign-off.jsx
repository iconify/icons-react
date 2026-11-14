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
		"content": `<style>.cnyieybly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15c1.5-3.5 3-6 4-5s-1 5.5.5 5.5s2.5-3.5 3.5-3c.75.4.25 2.5 1.5 2.5m-9.5 4h17m-6-10.5l2.25 2.25L21 6.5");
}
</style><path class="cnyieybly"/>`,
		"fallback": "uix:final-sign-off",
	});
}

export default Component;
