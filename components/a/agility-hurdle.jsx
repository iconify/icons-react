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
		"content": `<style>.j9w8j1bwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3v17.5M18 3v17.5M3.5 9.5h17m-17 11h5m7 0h5");
}
</style><path class="j9w8j1bwp"/>`,
		"fallback": "uix-sharp:agility-hurdle",
	});
}

export default Component;
