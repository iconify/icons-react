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
		"content": `<style>.gqhdvi0rk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5v-4l-5-5a1.75 1.75 0 0 1 2.25-2.25L9 13v-2a1 1 0 0 1 1-1h5l3-5.5a1.5 1.5 0 0 1 2.5 1.25l-3 6.25v5.5l-1 4m-5-8H15");
}
</style><path class="gqhdvi0rk"/>`,
		"fallback": "uix:hand-call-me",
	});
}

export default Component;
