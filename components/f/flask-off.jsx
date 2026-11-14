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
		"content": `<style>.pp22wbh6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5v2.6m-1.723 6.174L5 18.5q-1 2 1.25 2h10.331m-1.352-9.165L14 9V3.5m-5.5 0h7m-12 0l17 17");
}
</style><path class="pp22wbh6r"/>`,
		"fallback": "uix:flask-off",
	});
}

export default Component;
