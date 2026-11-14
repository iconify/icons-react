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
		"content": `<style>.wrjjvsb3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5q2.25-2 4.5 0T12 5t4.5 0T21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm10 16l8-8");
}
</style><path class="wrjjvsb3z"/>`,
		"fallback": "uix:baby-blanket",
	});
}

export default Component;
