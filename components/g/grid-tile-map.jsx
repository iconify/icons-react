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
		"content": `<style>.k65k4g4jh {
  fill: currentColor;
  d: path("M13.5 13.5h7v7h-7Z");
}

.l3a9-l0qh {
  d: path("M3.5 3.5h7v7h-7Zm10 0h7v7h-7Zm-10 10h7v7h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l3a9-l0qh"/><path class="k65k4g4jh"/></g>`,
		"fallback": "uix-sharp:grid-tile-map",
	});
}

export default Component;
