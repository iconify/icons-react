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
		"content": `<style>.oq-j6euas {
  d: path("M6.5 7.75v8.5m11 0V9.5A2.5 2.5 0 0 0 15 7h-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmbk0ebuf {
  d: path("M13.5 4.5L11 7l2.5 2.5m-9.25-4a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 13a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm11 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="oq-j6euas"/><path class="zmbk0ebuf"/></g>`,
		"fallback": "uix-sharp:code-pull-request",
	});
}

export default Component;
