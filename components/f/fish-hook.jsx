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
		"content": `<style>.ki8mss4zs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M16 5.75v9.75m0 0a4.75 4.75 0 0 1-9.5 0m0 0V11L9 13.5");
}
</style><path class="ki8mss4zs"/>`,
		"fallback": "uix:fish-hook",
	});
}

export default Component;
