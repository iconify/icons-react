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
		"content": `<style>.omxdvsb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13.5v-2a7.5 7.5 0 0 1 15 0v2M3 13.5h5v7H3Zm13 0h5v7h-5Z");
}
</style><path class="omxdvsb-y"/>`,
		"fallback": "uix-sharp:headphones-over-ear",
	});
}

export default Component;
