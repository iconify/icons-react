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
		"content": `<style>.w70mdgbxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h17V21h-17Zm4.5-2V6m8-3.5V6M3.5 9h17m-13 3.25h9M7.5 15h7m-7 2.75h9");
}
</style><path class="w70mdgbxy"/>`,
		"fallback": "uix-sharp:availability-slots",
	});
}

export default Component;
