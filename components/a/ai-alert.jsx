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
		"content": `<style>.q03s1s14v {
  d: path("M18.5 15.5q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3Z");
}

.ri0p6tz1n {
  d: path("M15.458 19H3l9-16l7.011 12.464M12 9v4m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ri0p6tz1n"/><path class="q03s1s14v"/></g>`,
		"fallback": "uix-sharp:ai-alert",
	});
}

export default Component;
