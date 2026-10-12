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
		"content": `<style>.l-aeaorem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.25a2.5 2.5 0 0 1 2.5-2.5h7.5a2.5 2.5 0 0 1 2.5 2.5v14.6c0 .85-.95 1.3-1.6.85L12 17.25L7.35 20.7c-.65.45-1.6 0-1.6-.85Zm3.5 2h5.5");
}
</style><path class="l-aeaorem"/>`,
		"fallback": "iconoven:bookmark-plus",
	});
}

export default Component;
