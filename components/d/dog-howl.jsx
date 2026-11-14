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
		"content": `<style>.ms6z8_7gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 21.5L15 18l-5-4.5l4-.5l-3.5-4.5c1.5-1 3.5-.5 5 .5l3-4l1.5 5.5c1.5 2 1.75 5.5 1.75 11m-5.25-10h.01M7 3a3 3 0 1 0 1 4a2.5 2.5 0 0 1-1-4");
}
</style><path class="ms6z8_7gv"/>`,
		"fallback": "uix:dog-howl",
	});
}

export default Component;
