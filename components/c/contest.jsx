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

.wplnp7bje {
  d: path("M6.5 3h11v5.5a5.5 5.5 0 0 1-11 0Z");
}

.y8blz6nou {
  d: path("M6.5 5H4v2a3 3 0 0 0 3 3m10.5-5H20v2a3 3 0 0 1-3 3m-5 4v3.5m-4.5 0h9V21h-9Z");
}
</style><g class="ulnmmdpxh"><path class="wplnp7bje"/><path class="y8blz6nou"/></g>`,
		"fallback": "uix-sharp:contest",
	});
}

export default Component;
