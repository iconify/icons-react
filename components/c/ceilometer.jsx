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
		"content": `<style>.q21wkx4as {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10h8a2.75 2.75 0 0 0 0-5.5a4 4 0 0 0-7.25.75A2.5 2.5 0 0 0 8 10Zm-2.5 8h13v3.5h-13Zm6.5 0v-5m-2.25 2.25L12 13l2.25 2.25");
}
</style><path class="q21wkx4as"/>`,
		"fallback": "uix-sharp:ceilometer",
	});
}

export default Component;
