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
		"content": `<style>.f7r69sbah {
  d: path("M3.5 6h17a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z");
}

.q9tz9rbxd {
  d: path("M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 6V3m-1.5 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f7r69sbah"/><path class="q9tz9rbxd"/></g>`,
		"fallback": "uix-sharp:frac-tank",
	});
}

export default Component;
