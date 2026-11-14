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
		"content": `<style>.gvwot9qde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h4l3.5 2.5h5l4-3a1.75 1.75 0 0 1 2.25 2.75L16.5 21h-14Zm9.5-1.5L7.5 8A3 3 0 0 1 12 4.25A3 3 0 0 1 16.5 8ZM5.5 14v7");
}
</style><path class="gvwot9qde"/>`,
		"fallback": "uix:donate-heart-hand",
	});
}

export default Component;
