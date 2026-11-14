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
		"content": `<style>.py-1uabzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5L21 13.25l-5.25 2.5l-2.5 5.25Zm0-6v3m-6 3h3m-2-5l2.25 2.25");
}
</style><path class="py-1uabzp"/>`,
		"fallback": "uix-sharp:cursor-click",
	});
}

export default Component;
