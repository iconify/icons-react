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
		"content": `<style>.i-k4kvbnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6l4 4l-1.5 2.5l-2-1.5v13h-2.75L12 13l-.75 8H8.5V8l-2 1.5L5 7Zm3 3h.01");
}
</style><path class="i-k4kvbnt"/>`,
		"fallback": "uix:drysuit",
	});
}

export default Component;
