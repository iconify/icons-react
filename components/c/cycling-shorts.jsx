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
		"content": `<style>.hrp2hupmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.25h11a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 6.25v-.5a1.5 1.5 0 0 1 1.5-1.5M5 7.75l-1 12h6.75l1.25-7l1.25 7H20l-1-12");
}
</style><path class="hrp2hupmd"/>`,
		"fallback": "uix:cycling-shorts",
	});
}

export default Component;
