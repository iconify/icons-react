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
		"content": `<style>.nij7yy7sj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v16m-4.5 2.5l4.5-3l4.5 3M7 4.5v2h5M17 8v2h-5");
}
</style><path class="nij7yy7sj"/>`,
		"fallback": "uix-sharp:coat-rack",
	});
}

export default Component;
