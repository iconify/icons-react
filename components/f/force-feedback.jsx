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
		"content": `<style>.mvi5bri7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6za2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 12 18a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 12 6m-9.5 6h4.25m-1.125-1.125l.064.064a1.5 1.5 0 0 1 0 2.122l-.064.064a.659.659 0 0 1-1.125-.466v-1.318a.659.659 0 0 1 1.125-.466M21.5 12h-4.25m1.125-1.125l-.064.064a1.5 1.5 0 0 0 0 2.122l.064.064a.659.659 0 0 0 1.125-.466v-1.318a.659.659 0 0 0-1.125-.466");
}
</style><path class="mvi5bri7d"/>`,
		"fallback": "uix:force-feedback",
	});
}

export default Component;
