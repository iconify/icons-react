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
		"content": `<style>.uqmdy4vdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 6L12 2.5L8.5 6m7 4L12 6.5L8.5 10m7 8L12 21.5L8.5 18m7-4L12 17.5L8.5 14");
}
</style><path class="uqmdy4vdp"/>`,
		"fallback": "uix-sharp:chevrons-up-down",
	});
}

export default Component;
