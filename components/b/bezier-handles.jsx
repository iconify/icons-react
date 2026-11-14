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
		"content": `<style>.osi-kw8pm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-8 4-11.25 7-12m4 0c3 .75 7 4 7 12m-9.5-16h1A1.5 1.5 0 0 1 14 6v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 7V6a1.5 1.5 0 0 1 1.5-1.5m-6 2H10m4 0h4.5m-16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="osi-kw8pm"/>`,
		"fallback": "uix:bezier-handles",
	});
}

export default Component;
