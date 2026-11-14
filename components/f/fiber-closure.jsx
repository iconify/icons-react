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
		"content": `<style>.iph7h53xd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.5v-3a5.5 5.5 0 0 1 11 0v3m-11.25 0h11.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 17.75 17H6.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75m-3.75 6c0-3 1-4.25 2-4.25m17 4.25c0-3-1-4.25-2-4.25");
}
</style><path class="iph7h53xd"/>`,
		"fallback": "uix:fiber-closure",
	});
}

export default Component;
