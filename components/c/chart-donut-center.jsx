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

.j6ycy56dm {
  fill: currentColor;
  d: path("M10.25 11.25h3.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-3.5A.75.75 0 0 1 9.5 12a.75.75 0 0 1 .75-.75");
}

.mhttnvbpw {
  d: path("M13.75 2.75A9.5 9.5 0 0 1 18 19.25l-2.25-2.75A6 6 0 0 0 13 6ZM15.25 21A9.5 9.5 0 0 1 3 15.25L6.25 14A6 6 0 0 0 14 17.75ZM2.5 12a9.5 9.5 0 0 1 7.75-9.25L11 6a6 6 0 0 0-5 6Z");
}
</style><g class="hntgybcog"><path class="mhttnvbpw"/><path class="j6ycy56dm"/></g>`,
		"fallback": "uix:chart-donut-center",
	});
}

export default Component;
