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
		"content": `<style>.xokhmeb0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 14a1.5 1.5 0 1 1-1.25 2.25a1.5 1.5 0 1 1-2.5 0A1.5 1.5 0 1 1 5.5 14a1.5 1.5 0 1 1 1.25-2.25a1.5 1.5 0 1 1 2.5 0A1.5 1.5 0 1 1 10.5 14M8 18.5v3m9.5-15c-3-5.5-5.25-2.5-3 0c-2.25 2.5.5 5 3 1.5c2.5 3.5 5.25 1 3-1.5c2.25-2.5 0-5.5-3 0M8 14h.01m9.49-9.5v6");
}
</style><path class="xokhmeb0l"/>`,
		"fallback": "uix:flower-butterfly",
	});
}

export default Component;
