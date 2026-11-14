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
		"content": `<style>.c49ti0bbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8h17l-2.25 13.5H5.75Zm0 0c0-6.25 17-6.25 17 0");
}
</style><path class="c49ti0bbp"/>`,
		"fallback": "uix-sharp:bucket",
	});
}

export default Component;
