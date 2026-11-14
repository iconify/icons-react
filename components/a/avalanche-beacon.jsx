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
		"content": `<style>.srwwzbcdb {
  d: path("M9.75 14.75h4.5v3.5h-4.5Zm-1-10.25c-1.5 1.5-1.5 3.5 0 5m6.5-5c1.5 1.5 1.5 3.5 0 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3hbwrw9y {
  d: path("M7 12h10v9.5H7Zm5 0V7");
}
</style><g class="ulnmmdpxh"><path class="y3hbwrw9y"/><path class="srwwzbcdb"/></g>`,
		"fallback": "uix-sharp:avalanche-beacon",
	});
}

export default Component;
