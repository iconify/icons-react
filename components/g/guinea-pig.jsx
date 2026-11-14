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
		"content": `<style>.c3h0h9p8g {
  d: path("M5.5 9C4 5 9.5 3.5 9.75 7.25M7 17.25v1.5m9-1.5v1.5M6.5 11.5h.01");
}

.tzp-j9l5u {
  d: path("M3.5 12.5a8.5 5.5 0 1 0 17 0a8.5 5.5 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tzp-j9l5u"/><path class="c3h0h9p8g"/></g>`,
		"fallback": "uix-sharp:guinea-pig",
	});
}

export default Component;
