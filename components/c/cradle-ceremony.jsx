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
		"content": `<style>.b4-6rmfsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10h15v4a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3ZM3 18.5q9 4.5 18 0M4.5 10V8a4 4 0 0 1 8 0v2M8 17v3.25M16 17v3.25");
}
</style><path class="b4-6rmfsw"/>`,
		"fallback": "uix:cradle-ceremony",
	});
}

export default Component;
