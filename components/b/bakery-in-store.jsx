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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh7h-ac9k {
  d: path("M3.5 2.5h17v14h-17Zm0 14h17l1 5h-19Z");
}

.yvoouxbhk {
  d: path("M7.5 13c0-5 9-5 9 0Z");
}
</style><g class="ulnmmdpxh"><path class="xh7h-ac9k"/><path class="yvoouxbhk"/></g>`,
		"fallback": "uix-sharp:bakery-in-store",
	});
}

export default Component;
