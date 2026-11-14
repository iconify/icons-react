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
		"content": `<style>.z2mf-7byl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.75c0-1.25 1-2 2.25-1.75S7 6.5 8 9c1.5-1 3.5-1.5 5.5-1.5c3.5 0 5.5 2.5 8 8C20 14.5 19 14 18 14H9.5c-1 0-1.5-1-2-2.5c-.75-2-1.5-3-3-3c-1.25 0-2-.75-2-1.75M9.75 14v5m2.75-5v5m2.75-5v5M18 14v5");
}
</style><path class="z2mf-7byl"/>`,
		"fallback": "uix:brontosaurus",
	});
}

export default Component;
