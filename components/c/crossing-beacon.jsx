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
		"content": `<style>.lqltz5bgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5 5v9m-3.5 0h7M4.75 3.5a8.25 8.25 0 0 0 0 8m14.5-8a8.25 8.25 0 0 1 0 8");
}
</style><path class="lqltz5bgg"/>`,
		"fallback": "uix:crossing-beacon",
	});
}

export default Component;
