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
		"content": `<style>.ke8h5qbdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM2 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2-12l-2 3m5-3l2 3m-9.75 4.25l-1.5 2.5m4-2.5l1.5 2.5");
}
</style><path class="ke8h5qbdj"/>`,
		"fallback": "uix-sharp:heap-data",
	});
}

export default Component;
