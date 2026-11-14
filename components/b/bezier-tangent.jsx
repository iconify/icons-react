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
		"content": `<style>.b_i_zvutv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM8 4l12 12m-6-6h.01");
}
</style><path class="b_i_zvutv"/>`,
		"fallback": "uix-sharp:bezier-tangent",
	});
}

export default Component;
