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
		"content": `<style>.zzkjjdq9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21.5V11a5 5 0 0 1 10 0v10.5ZM12 3v3M9.5 3h5");
}
</style><path class="zzkjjdq9h"/>`,
		"fallback": "uix-sharp:cng",
	});
}

export default Component;
