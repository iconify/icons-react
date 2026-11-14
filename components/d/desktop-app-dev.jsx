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

.kraz7acna {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v4.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.75A4.375 4.375 0 0 1 6.875 3M12 16.5v4m-4 0h8");
}

.tod8vrbwb {
  d: path("M7.75 6h8.5A1.75 1.75 0 0 1 18 7.75v4a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 11.75v-4A1.75 1.75 0 0 1 7.75 6M6 8.75h12");
}
</style><g class="hntgybcog"><path class="kraz7acna"/><path class="tod8vrbwb"/></g>`,
		"fallback": "uix:desktop-app-dev",
	});
}

export default Component;
