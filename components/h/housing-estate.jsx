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
		"content": `<style>.myt7txldp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6L5 3.5L7.5 6v4h-5zm7 0L12 3.5L14.5 6v4h-5zm7 0L19 3.5L21.5 6v4h-5zm-14 11L5 14.5L7.5 17v4h-5zm7 0l2.5-2.5l2.5 2.5v4h-5zm7 0l2.5-2.5l2.5 2.5v4h-5z");
}
</style><path class="myt7txldp"/>`,
		"fallback": "uix:housing-estate",
	});
}

export default Component;
