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
		"content": `<style>.x9fp0jc_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h5v-5h5v-5h8m-4 0V3m0 .5h4v4h-4");
}
</style><path class="x9fp0jc_q"/>`,
		"fallback": "uix-sharp:floors-climbed",
	});
}

export default Component;
