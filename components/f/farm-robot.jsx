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
		"content": `<style>.h-pn7hb8g {
  d: path("M3 7h11v11H3Zm5.5 0V5.5M7 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.tha1lruut {
  d: path("M4 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8.5 2V15q0-4.5 3-4.5c0 2.5-1 4.5-3 4.5m-12-3h.01m3.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-pn7hb8g"/><path class="tha1lruut"/></g>`,
		"fallback": "uix-sharp:farm-robot",
	});
}

export default Component;
