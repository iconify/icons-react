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
		"content": `<style>.f5rpn5bhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l9-5l9 5Zm9 3v9m-3 0h6m-9.5-8h13M3.5 17l2-4.5l2 4.5m-4 0a2 2 0 0 0 4 0Zm13 0l2-4.5l2 4.5m-4 0a2 2 0 0 0 4 0Z");
}
</style><path class="f5rpn5bhr"/>`,
		"fallback": "uix-sharp:courthouse-civic",
	});
}

export default Component;
