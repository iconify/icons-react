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
		"content": `<style>.x6198qbex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 6.75v-4h13.5v4m-16 0h18.5v4H2.75zm1.5 4h15.5v10.5H4.25zm5 3.5h5.5");
}
</style><path class="x6198qbex"/>`,
		"fallback": "iconoven:cooler-box-sharp",
	});
}

export default Component;
