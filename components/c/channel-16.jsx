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
		"content": `<style>.h3vprlbqt {
  d: path("M11.025 8.525a3.5 3.5 0 0 1 4.95 0M8.904 6.404a6.5 6.5 0 0 1 9.192 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zx0nxy-4r {
  d: path("M4.5 8h9v13.5h-9ZM7 8V2.5m.5 14h3");
}
</style><g class="ulnmmdpxh"><path class="zx0nxy-4r"/><path class="h3vprlbqt"/></g>`,
		"fallback": "uix-sharp:channel-16",
	});
}

export default Component;
