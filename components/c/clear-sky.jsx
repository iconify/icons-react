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
		"content": `<style>.tozg_cb9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 13a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-6 6.5h19M12 6.75v-2M5.75 13h-2m14.5 0h2M7.5 8.5L6.25 7.25M16.5 8.5l1.25-1.25");
}
</style><path class="tozg_cb9r"/>`,
		"fallback": "uix:clear-sky",
	});
}

export default Component;
