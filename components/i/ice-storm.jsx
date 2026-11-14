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
		"content": `<style>.mjfbg2rdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5a3.5 3.5 0 0 1 0-7a5 5 0 0 1 9.5-.5a3.75 3.75 0 0 1 0 7.5Zm.5 0l1 4.5l1-4.5m1.75 0l1 6l1-6m1.75 0l1 4.5l1-4.5");
}
</style><path class="mjfbg2rdi"/>`,
		"fallback": "uix-sharp:ice-storm",
	});
}

export default Component;
