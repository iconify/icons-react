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
		"content": `<style>.blvwpmb4u {
  d: path("M4 2.5h16V16H4ZM4 16h16l1.5 5.5h-19ZM4 6h16");
}

.qjp3ou2ni {
  d: path("M8 16a4 4 0 0 1 8 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="blvwpmb4u"/><path class="qjp3ou2ni"/></g>`,
		"fallback": "uix-sharp:dishwasher-open",
	});
}

export default Component;
