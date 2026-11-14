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
		"content": `<style>.ivf4nju8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v6m18-6v6M3 7h18M5 5L3 7l2 2m14-4l2 2l-2 2M5 13h14v8H5Z");
}
</style><path class="ivf4nju8k"/>`,
		"fallback": "uix-sharp:dimension-line",
	});
}

export default Component;
