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
		"content": `<style>.o6wz2fblc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.625 3h6.75A2.625 2.625 0 0 1 18 5.625V17.25a1.875 1.875 0 0 1-3 1.5l-1.425-1.069a2.625 2.625 0 0 0-3.15 0L9 18.75a1.875 1.875 0 0 1-3-1.5V5.625A2.625 2.625 0 0 1 8.625 3");
}
</style><path class="o6wz2fblc"/>`,
		"fallback": "uix:bookmark",
	});
}

export default Component;
