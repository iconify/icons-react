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
		"content": `<style>.jt5gjlb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.25 16V12a2 2 0 0 1 4 0v9.5m3.5-16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.25 16V12a2 2 0 0 1 4 0v9.5m3.5-16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.25 16V12a2 2 0 0 1 4 0v9.5");
}
</style><path class="jt5gjlb5t"/>`,
		"fallback": "uix-sharp:crowd-standing",
	});
}

export default Component;
