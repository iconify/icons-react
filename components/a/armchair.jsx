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
		"content": `<style>.grpe-gb8b {
  d: path("M3.25 12.5a2.25 2.25 0 0 1 4.5 0v1.75h8.5V12.5a2.25 2.25 0 0 1 4.5 0V18a2 2 0 0 1-2 2H5.25a2 2 0 0 1-2-2ZM6 20v1.25M18 20v1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uy50habvv {
  d: path("M6.25 10.25v-3.5a4 4 0 0 1 4-4h3.5a4 4 0 0 1 4 4v3.5");
}
</style><g class="hntgybcog"><path class="uy50habvv"/><path class="grpe-gb8b"/></g>`,
		"fallback": "iconoven:armchair",
	});
}

export default Component;
