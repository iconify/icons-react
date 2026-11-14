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
		"content": `<style>.rfig82bbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3h6.5A1.75 1.75 0 0 1 17 4.75v5A1.25 1.25 0 0 1 15.75 11a1.25 1.25 0 0 0-1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 0 8.25 11A1.25 1.25 0 0 1 7 9.75v-5A1.75 1.75 0 0 1 8.75 3m1 0v2.5M12 3v2.5M14.25 3v2.5m-2.25 8v8");
}
</style><path class="rfig82bbq"/>`,
		"fallback": "uix:cable-ethernet",
	});
}

export default Component;
