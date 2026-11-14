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
		"content": `<style>.zu7hu_cyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21V4h19v17m-19-8.5h19m-19-4.25h19M8.75 4v8.5m6.5-8.5v8.5");
}
</style><path class="zu7hu_cyu"/>`,
		"fallback": "uix:badminton-net",
	});
}

export default Component;
