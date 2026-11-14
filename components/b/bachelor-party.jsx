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
		"content": `<style>.qhes8e3mu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L9.5 10v4L3 17.5Zm18 0L14.5 10v4l6.5 3.5Zm-11.5 3h5v5h-5Z");
}
</style><path class="qhes8e3mu"/>`,
		"fallback": "uix-sharp:bachelor-party",
	});
}

export default Component;
