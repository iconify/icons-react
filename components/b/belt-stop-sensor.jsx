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
		"content": `<style>.aqeis1bml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.75h14v5h-14ZM5 6.25h5.5v7.5H5ZM19 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 1.5v7.75M13.25 9.5h3M5.5 16.25h.01m7.99 0h.01");
}
</style><path class="aqeis1bml"/>`,
		"fallback": "uix-sharp:belt-stop-sensor",
	});
}

export default Component;
