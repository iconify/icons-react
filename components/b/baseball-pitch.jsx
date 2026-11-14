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
		"content": `<style>.b9b3lpetn {
  d: path("M8.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.n-uxbyb1s {
  d: path("M11.5 6.5q2.5 5.5 0 11m7-11q-2.5 5.5 0 11M3.5 8h3m-4 4h3m-2 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b9b3lpetn"/><path class="n-uxbyb1s"/></g>`,
		"fallback": "uix-sharp:baseball-pitch",
	});
}

export default Component;
