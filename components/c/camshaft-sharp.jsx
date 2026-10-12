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
		"content": `<style>.szqd1jbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12H4.5m3 0h3m3 0h3m3 0h1.75M4 9.5a2 2 0 0 1 4 0c0 2-1 4-2 4s-2-2-2-4Zm6 5a2 2 0 0 0 4 0c0-2-1-4-2-4s-2 2-2 4Zm6-5a2 2 0 0 1 4 0c0 2-1 4-2 4s-2-2-2-4Z");
}
</style><path class="szqd1jbbp"/>`,
		"fallback": "iconoven:camshaft-sharp",
	});
}

export default Component;
