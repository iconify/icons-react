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
		"content": `<style>.pq6ve4mbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16.75v-11h7.5v11a3.75 3.75 0 0 1-7.5 0Zm11 0v-11h7.5v11a3.75 3.75 0 0 1-7.5 0Zm-3.5-7.25h3.5v3h-3.5zm-7.5 4h7.5m3.5 0h7.5");
}
</style><path class="pq6ve4mbs"/>`,
		"fallback": "iconoven:binoculars-sharp",
	});
}

export default Component;
