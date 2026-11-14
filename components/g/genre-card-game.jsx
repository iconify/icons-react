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
		"content": `<style>.mvxzrumbk {
  d: path("M10.5 6h9v15h-9Z");
}

.pur-f5vwd {
  d: path("M10.5 18L6.75 5.5L15 3l1 3M8.5 20L3 9l4-2.5m8 4l2 3l-2 3l-2-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mvxzrumbk"/><path class="pur-f5vwd"/></g>`,
		"fallback": "uix-sharp:genre-card-game",
	});
}

export default Component;
