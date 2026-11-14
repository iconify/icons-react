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
		"content": `<style>.f5tad1bcn {
  d: path("M3.5 7h17v3h-17Zm3 0c0-4.5 11-4.5 11 0M5 10l1 10q.1 1 1 1h10q.9 0 1-1l1-10");
}

.py1jhtded {
  d: path("M8.75 18.25c0-4 2.5-5.5 6.5-5.5c0 4-2.5 5.5-6.5 5.5Zm0 0l3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5tad1bcn"/><path class="py1jhtded"/></g>`,
		"fallback": "uix-sharp:food-waste-caddy",
	});
}

export default Component;
