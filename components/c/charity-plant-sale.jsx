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
		"content": `<style>.lhkuihrrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.687 12h5.626a1.5 1.5 0 0 1 1.49 1.675l-.647 5.5a1.5 1.5 0 0 1-1.49 1.325H5.334a1.5 1.5 0 0 1-1.49-1.325l-.647-5.5A1.5 1.5 0 0 1 4.687 12M7.5 12V7.5m0 1.5c0-2.5-2-4-4.75-4c0 2.5 2 4 4.75 4m0-1.5C7.5 5 9.5 3 12.25 3c0 2.5-2 4.5-4.75 4.5m7 8.25a.75.75 0 0 1 .75-.75h3.25l3 3.25l-3 3.25h-3.25a.75.75 0 0 1-.75-.75Z");
}
</style><path class="lhkuihrrv"/>`,
		"fallback": "uix:charity-plant-sale",
	});
}

export default Component;
