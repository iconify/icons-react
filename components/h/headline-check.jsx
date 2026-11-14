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
		"content": `<style>.v2ck2nkhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 7A3.5 3.5 0 0 1 6 3.5M6.5 7h11M3 15.5h8m3.75 2.5l2 2L21 15.75");
}
</style><path class="v2ck2nkhy"/>`,
		"fallback": "uix:headline-check",
	});
}

export default Component;
