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
		"content": `<style>.tw6w_bcnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 19.25a5.5 2.25 0 1 0 11 0a5.5 2.25 0 1 0-11 0ZM10.5 2.5v16.75m0-16.75l7.5 3l-7.5 3Z");
}
</style><path class="tw6w_bcnv"/>`,
		"fallback": "uix-sharp:golf-flagstick",
	});
}

export default Component;
