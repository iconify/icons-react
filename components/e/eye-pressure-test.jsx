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
		"content": `<style>.gy60m0bzr {
  d: path("M7.5 12c2.5-4.5 11-4.5 14 0c-3 4.5-11.5 4.5-14 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qli41z_6o {
  d: path("M12.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 8.5L5 10m-2.5 2H5m-2.5 3.5L5 14");
}
</style><g class="hntgybcog"><path class="gy60m0bzr"/><path class="qli41z_6o"/></g>`,
		"fallback": "uix:eye-pressure-test",
	});
}

export default Component;
