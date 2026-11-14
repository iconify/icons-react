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
		"content": `<style>.bseks8bem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.25 5.75l3.998-2.315a1.5 1.5 0 0 1 1.504 0L16.75 5.75a1.474 1.474 0 0 1-.739 2.75H7.989a1.474 1.474 0 0 1-.739-2.75M6 8.5V20m6-11.5V20m6-11.5v3.7M2.5 20h9.7m4.55-2.5h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="bseks8bem"/>`,
		"fallback": "uix:gov-portal-lock",
	});
}

export default Component;
