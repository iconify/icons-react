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
		"content": `<style>.ae71h-bkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19m-19-7h8.25L9 16H4.25Zm4.25 0V5L10 9.5H6.75M16 7h-2.5v2.75m0 2.75v2.75m0 2.5V19M19 7h2.5v2.75m0 2.75v2.75m0 2.5V19");
}
</style><path class="ae71h-bkh"/>`,
		"fallback": "uix:berth-free",
	});
}

export default Component;
