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
		"content": `<style>.ri0aeac-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h5.5v7l5.5 2q2 .75 2 3v1H8Zm-.5 16.5h14m-11-3.5v3.5m8-3.5v3.5M3.5 18h.01M3 14h.01M5 10.5h.01");
}
</style><path class="ri0aeac-y"/>`,
		"fallback": "uix-sharp:ice-spray",
	});
}

export default Component;
