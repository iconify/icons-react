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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qsfvv8bgq {
  d: path("M5.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4.5 7.5a3 3 0 0 1 6 0m3 0a3 3 0 0 1 6 0");
}

.v9-iq30mt {
  d: path("M3.5 7.5h17l-2 8.5h-13Z");
}
</style><g class="hntgybcog"><path class="v9-iq30mt"/><path class="qsfvv8bgq"/></g>`,
		"fallback": "uix:ball-cart",
	});
}

export default Component;
