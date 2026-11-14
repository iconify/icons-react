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
		"content": `<style>.st3soeupp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7h15l1 8h-17Zm4 0V5.5a3.5 3.5 0 0 1 7 0V7M3 19.75h18m-16-2l-2 2l2 2m14-4l2 2l-2 2");
}
</style><path class="st3soeupp"/>`,
		"fallback": "uix-sharp:bag-size-large",
	});
}

export default Component;
