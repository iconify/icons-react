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
		"content": `<style>.kb3q7xbzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 6.25A2.25 2.25 0 0 1 4.75 4M5 8.5v4m14-4v4M5 15.75v2.75a2 2 0 0 0 2 2h1.75M19 15.75v2.75a2 2 0 0 1-2 2h-1.75m-3.75 0h1");
}
</style><path class="kb3q7xbzk"/>`,
		"fallback": "uix:atm-out-of-cash",
	});
}

export default Component;
