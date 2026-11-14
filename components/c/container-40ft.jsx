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
		"content": `<style>.rxsx1tbvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 6.5h13.75A2.625 2.625 0 0 1 21.5 9.125v5.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 14.875v-5.75A2.625 2.625 0 0 1 5.125 6.5m1.375 0v11m3.5-11v11m4-11v11m3.5-11v11M3 21h18");
}
</style><path class="rxsx1tbvg"/>`,
		"fallback": "uix:container-40ft",
	});
}

export default Component;
