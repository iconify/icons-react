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
		"content": `<style>.xt-ovz7ou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 8.5a5 5 0 0 1 10 0c0 7-4.5 11-10.5 13m.5-13h.01m13.99-2h.01m-.01 6h.01");
}
</style><path class="xt-ovz7ou"/>`,
		"fallback": "uix:bass-clef",
	});
}

export default Component;
