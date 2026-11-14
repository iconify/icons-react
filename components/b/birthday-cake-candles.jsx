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
		"content": `<style>.m5j4ufw1m {
  d: path("M4 12h16v8.5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9gmn8bye {
  d: path("M4 15.25q2 1.75 4 0t4 0t4 0t4 0M8 8.75V12m4-3.25V12m4-3.25V12M8 5.75h.01m3.99 0h.01m3.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="m5j4ufw1m"/><path class="x9gmn8bye"/></g>`,
		"fallback": "uix-sharp:birthday-cake-candles",
	});
}

export default Component;
