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
		"content": `<style>.fmhng8i1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.25L10 10M4 9V4h5m10.75 15.75L14 14m6 1v5h-5m4.75-15.75L14 10m1-6h5v5M4.25 19.75L10 14m-1 6H4v-5");
}
</style><path class="fmhng8i1b"/>`,
		"fallback": "iconoven:arrow-expand-all",
	});
}

export default Component;
