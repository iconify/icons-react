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
		"content": `<style>.d5z8kbc0g {
  d: path("M11.5 11q2.25-1.5 4.5 0t4.5 0");
}

.olfenrkki {
  d: path("M2.5 2.5H9c2.5 1.5 2.5 4 .5 5.5c-3 2-3 5 .5 6.5c3 1 5.5 2.5 5.5 7h-13Zm12 3q1.75-1.5 3.5 0t3.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="olfenrkki"/><path class="d5z8kbc0g"/></g>`,
		"fallback": "uix-sharp:coast",
	});
}

export default Component;
