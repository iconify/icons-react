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
		"content": `<style>.fnymg8b5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l13-13M18.75 3za2.75 2.75 0 0 1 2.75 2.75v5.5A2.75 2.75 0 0 1 18.75 14A2.75 2.75 0 0 1 16 11.25v-5.5A2.75 2.75 0 0 1 18.75 3M16 5.75h5.5");
}
</style><path class="fnymg8b5l"/>`,
		"fallback": "uix:boom-mic",
	});
}

export default Component;
