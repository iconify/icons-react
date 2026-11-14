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
		"content": `<style>.u4qgl6bvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5v-13L12 3l6 5.5v13ZM6 10h12M2.5 15.5h2m3 0h2m1.5 0h2m1.5 0h2m3 0h2");
}
</style><path class="u4qgl6bvr"/>`,
		"fallback": "uix-sharp:basement-level",
	});
}

export default Component;
