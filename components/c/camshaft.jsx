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
		"content": `<style>.eqk1lcbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12H4.5m3 0h3m3 0h3m3 0h1.75M4 9.5a2 2 0 0 1 4 0c0 2-1 4-2 4s-2-2-2-4m6 5a2 2 0 0 0 4 0c0-2-1-4-2-4s-2 2-2 4m6-5a2 2 0 0 1 4 0c0 2-1 4-2 4s-2-2-2-4");
}
</style><path class="eqk1lcbrm"/>`,
		"fallback": "iconoven:camshaft",
	});
}

export default Component;
