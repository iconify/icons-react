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
		"content": `<style>.a3_k_wc9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.295 10h7.998a1.75 1.75 0 0 1 1.596 2.468l-.675 1.5A1.75 1.75 0 0 1 12.618 15H6.082a1.75 1.75 0 0 1-1.566-.967L3.75 12.5A1.727 1.727 0 0 1 5.295 10M12 10l7.25-6.5m0 0V19M2.5 18.5q2.375-1 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="a3_k_wc9s"/>`,
		"fallback": "uix:fisher",
	});
}

export default Component;
