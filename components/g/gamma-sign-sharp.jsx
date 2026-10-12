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
		"content": `<style>.zp__pnhot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.25h3.182l1.818 4L12 13.5c.75 1.75 1.75 3.5 1.75 5.25v2h-3.5v-2c0-1.75 1-3.5 1.75-5.25l7.75-8");
}
</style><path class="zp__pnhot"/>`,
		"fallback": "iconoven:gamma-sign-sharp",
	});
}

export default Component;
