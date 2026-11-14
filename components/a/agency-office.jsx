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
		"content": `<style>.q4_k4t33w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-17 0v9m9.5-9v9h5.5v-9M6.5 8l4-4l4 4v4.5h-8Zm7.5 8.75h5.5");
}
</style><path class="q4_k4t33w"/>`,
		"fallback": "uix-sharp:agency-office",
	});
}

export default Component;
