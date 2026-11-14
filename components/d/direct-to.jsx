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
		"content": `<style>.anr93cbeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 18.5L10 14m-3 0h3v3m7.793-11.802l2.377 4.041a1.5 1.5 0 0 1-1.293 2.261h-4.754a1.5 1.5 0 0 1-1.293-2.261l2.377-4.041a1.5 1.5 0 0 1 2.586 0M3.5 20.5h.01");
}
</style><path class="anr93cbeg"/>`,
		"fallback": "uix:direct-to",
	});
}

export default Component;
