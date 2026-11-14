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
		"content": `<style>.eqeq-vbmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h9V9H7ZM2.5 9h19L19 14H5Zm.5 8.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M3 20.75q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="eqeq-vbmf"/>`,
		"fallback": "uix-sharp:ferry-terminal",
	});
}

export default Component;
