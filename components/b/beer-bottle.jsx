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
		"content": `<style>.yry55q_aj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5h3V7c0 1.25 2.5 2.25 2.5 4v8.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 19.5V11c0-1.75 2.5-2.75 2.5-4ZM8 13h8m-8 4.5h8");
}
</style><path class="yry55q_aj"/>`,
		"fallback": "uix-sharp:beer-bottle",
	});
}

export default Component;
