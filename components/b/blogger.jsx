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
		"content": `<style>.o7-xvnbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3 7.5c0-1 2.5-1.75 6-1.75s6 .75 6 1.75m-11.75 0h11.5a1.75 1.75 0 0 1 1.75 1.75v3A1.75 1.75 0 0 1 17.75 20H6.25a1.75 1.75 0 0 1-1.75-1.75v-3a1.75 1.75 0 0 1 1.75-1.75M2.5 20h19M8 16.75h5");
}
</style><path class="o7-xvnbsu"/>`,
		"fallback": "uix:blogger",
	});
}

export default Component;
