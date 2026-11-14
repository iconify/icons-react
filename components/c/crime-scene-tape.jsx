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
		"content": `<style>.fmphk0boe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5V21m-2 0h4M19 3.5V21m-2 0h4M2.5 7l19 4.5v4L2.5 11Zm8.25 2l-1.5 3.5m6-2.5l-1.5 3.75");
}
</style><path class="fmphk0boe"/>`,
		"fallback": "uix-sharp:crime-scene-tape",
	});
}

export default Component;
