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
		"content": `<style>.dgisqrp3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h9v10h-9Zm9 3.5l3-1.75v6.5l-3-1.75Zm8-7v17m-2-15l2-2l2 2m-4 13l2 2l2-2");
}
</style><path class="dgisqrp3r"/>`,
		"fallback": "uix-sharp:camera-tilt",
	});
}

export default Component;
