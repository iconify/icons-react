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
		"content": `<style>.rfk_xid7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3.5h12.5A1.75 1.75 0 0 1 20 5.25A1.75 1.75 0 0 1 18.25 7H5.75A1.75 1.75 0 0 1 4 5.25A1.75 1.75 0 0 1 5.75 3.5m0 6.75h12.5A1.75 1.75 0 0 1 20 12a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 12a1.75 1.75 0 0 1 1.75-1.75m0 6.75h12.5A1.75 1.75 0 0 1 20 18.75a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.75A1.75 1.75 0 0 1 5.75 17");
}
</style><path class="rfk_xid7i"/>`,
		"fallback": "uix:compose-stack",
	});
}

export default Component;
