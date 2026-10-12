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
		"content": `<style>.jcm3zxb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75v-3.5h3.5m11.5 0h3.5v3.5m0 6.5v3.5h-3.5m-11.5 0h-3.5v-3.5m7.25-10h4m-4 13.5h4m-7.75-10h11.5v6.5H6.25z");
}
</style><path class="jcm3zxb1m"/>`,
		"fallback": "iconoven:focus-ring-sharp",
	});
}

export default Component;
