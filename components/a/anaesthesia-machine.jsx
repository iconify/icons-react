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
		"content": `<style>.hdqv_6b4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7za3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3m0 0V3M5 3h4m0 0c6 0 8 3 8 8.5m-3.5 0h7l-1.25 4c-.5 1.75-4 1.75-4.5 0Z");
}
</style><path class="hdqv_6b4q"/>`,
		"fallback": "uix:anaesthesia-machine",
	});
}

export default Component;
