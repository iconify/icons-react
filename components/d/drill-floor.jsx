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
		"content": `<style>.c_viz2oum {
  d: path("m2.76 16.973l1.875-5A1.5 1.5 0 0 1 6.04 11h11.92a1.5 1.5 0 0 1 1.405.973l1.875 5A1.5 1.5 0 0 1 19.835 19H4.165a1.5 1.5 0 0 1-1.405-2.027");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ne4rxlkms {
  d: path("M7.5 15a4.5 1.25 0 1 0 9 0a4.5 1.25 0 1 0-9 0m3-13v13m3-13v13M4 19v3m16-3v3");
}
</style><g class="hntgybcog"><path class="c_viz2oum"/><path class="ne4rxlkms"/></g>`,
		"fallback": "uix:drill-floor",
	});
}

export default Component;
