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
		"content": `<style>.oseykm-bn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h7v16h-7Zm10 0h7v16h-7Zm-3-1h3v18h-3ZM6.75 7.5h.01m-.01 9h.01m10.49-9h.01m-.01 9h.01");
}
</style><path class="oseykm-bn"/>`,
		"fallback": "uix-sharp:hinge",
	});
}

export default Component;
