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
		"content": `<style>.gdjg8qbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 15h8a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 0v-4.5h8V15M6 10.5V5h4l1 5.5m9.5-.5za1 1 0 0 1 1 1v9a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1m-7 2.25h6");
}
</style><path class="gdjg8qbnv"/>`,
		"fallback": "uix:bulldozer",
	});
}

export default Component;
