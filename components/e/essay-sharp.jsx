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
		"content": `<style>.qx8e769wl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v18.5H3.75zm5.5 4h5.5m-5 3.5h6.5m-8.5 3.25h8.5M7.75 17h5.75");
}
</style><path class="qx8e769wl"/>`,
		"fallback": "iconoven:essay-sharp",
	});
}

export default Component;
