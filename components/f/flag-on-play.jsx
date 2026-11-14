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
		"content": `<style>.gh94xvu3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5v19M5.5 4c4-1.5 8 2 13.5.5v9c-5.5 1.5-9.5-2-13.5-.5M3 21.5h5");
}
</style><path class="gh94xvu3h"/>`,
		"fallback": "uix:flag-on-play",
	});
}

export default Component;
