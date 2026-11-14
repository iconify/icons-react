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
		"content": `<style>.f_tzcp8uc {
  d: path("M5.5 14.5c2-1.25 4 1.25 6.5 0s4.5 1.25 6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ub_9f-bww {
  d: path("M4.682 10h14.636a1.75 1.75 0 0 1 1.709 2.13l-1.222 5.5A1.75 1.75 0 0 1 18.096 19H5.904a1.75 1.75 0 0 1-1.709-1.37l-1.222-5.5A1.75 1.75 0 0 1 4.682 10");
}
</style><g class="hntgybcog"><path class="ub_9f-bww"/><path class="f_tzcp8uc"/></g>`,
		"fallback": "uix:developing-tray",
	});
}

export default Component;
