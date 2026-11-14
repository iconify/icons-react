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
		"content": `<style>.ke3ymi_3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 20.5v-17m9 0v17m-12-14l3-3l3 3m3 11l3 3l3-3");
}
</style><path class="ke3ymi_3d"/>`,
		"fallback": "uix-sharp:arrows-up-down-alt",
	});
}

export default Component;
