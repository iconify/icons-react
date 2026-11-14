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
		"content": `<style>.sq8gx7b0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v3.5h-19ZM4 6.5h2.5V21H4Zm6.75 0h2.5V21h-2.5Zm6.75 0H20V21h-2.5Z");
}
</style><path class="sq8gx7b0g"/>`,
		"fallback": "uix-sharp:colonnade",
	});
}

export default Component;
