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
		"content": `<style>.mzw-cxuht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.75h2a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7.5 18V8.25a3.5 3.5 0 0 1 3.5-3.5m-.5 0V2.5h3v2.25m-6 7.75h9");
}
</style><path class="mzw-cxuht"/>`,
		"fallback": "uix:battery-aaa",
	});
}

export default Component;
