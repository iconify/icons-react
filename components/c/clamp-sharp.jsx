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
		"content": `<style>.x160ewbsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h12v3.25h-10v9.5h10V19H5.25V3zm8.75 18.25v-10m-2.25 0h4.5m-4.75 10h5");
}
</style><path class="x160ewbsh"/>`,
		"fallback": "iconoven:clamp-sharp",
	});
}

export default Component;
