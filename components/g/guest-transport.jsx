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
		"content": `<style>.hq-h8uxcp {
  d: path("M2.5 3.5h19v13h-19Z");
}

.r-s0mry7j {
  d: path("M5.25 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9-12.25h8v4h-8Zm4 0v4m6.75-4h2.75v7.5H16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hq-h8uxcp"/><path class="r-s0mry7j"/></g>`,
		"fallback": "uix-sharp:guest-transport",
	});
}

export default Component;
