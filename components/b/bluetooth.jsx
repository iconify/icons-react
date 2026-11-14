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
		"content": `<style>.kpxx-uiqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 7.5l9.5 8.5l-4.5 4.5v-17L16.5 8L7 16.5");
}
</style><path class="kpxx-uiqk"/>`,
		"fallback": "uix:bluetooth",
	});
}

export default Component;
