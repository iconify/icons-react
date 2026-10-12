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

.pr0qow8yc {
  d: path("M2.75 6.75h13.5a1 1 0 0 1 1 1v13.5");
}

.yr9f45buw {
  d: path("M6.75 2.75v13.5a1 1 0 0 0 1 1h13.5");
}
</style><g class="hntgybcog"><path class="yr9f45buw"/><path class="pr0qow8yc"/></g>`,
		"fallback": "iconoven:crop-marks",
	});
}

export default Component;
