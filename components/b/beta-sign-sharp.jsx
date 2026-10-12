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
		"content": `<style>.i9fb2ybmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.5a4.75 4.75 0 0 1 9.5 0c0 2-1.5 3.5-3.5 3.5c2.75 0 4.75 1.75 4.75 4.25s-2 4.25-4.75 4.25c-2.25 0-4.25-1.25-6-3m0-9V21");
}
</style><path class="i9fb2ybmx"/>`,
		"fallback": "iconoven:beta-sign-sharp",
	});
}

export default Component;
