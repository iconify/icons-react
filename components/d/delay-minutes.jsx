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
		"content": `<style>.hmf_rsb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h2.5m3 0H11m-8 7h2.5m3 0H11M3 18h2.5m3 0h3.75M18 15v6m-3-3h6");
}
</style><path class="hmf_rsb8i"/>`,
		"fallback": "uix:delay-minutes",
	});
}

export default Component;
