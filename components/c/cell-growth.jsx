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
		"content": `<style>.gu2qreweg {
  d: path("M11.75 3.25L13 5.5l-2.25 1.25");
}

.rcdiddcip {
  d: path("M11 14.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0Zm-8.5 1a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75-5.5C5.25 6 9 4.5 13 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rcdiddcip"/><path class="gu2qreweg"/></g>`,
		"fallback": "uix-sharp:cell-growth",
	});
}

export default Component;
