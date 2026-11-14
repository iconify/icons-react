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
		"content": `<style>.u4nxrux-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 7.5l9 9m0-9l-9 9M3 3h4.5v4.5H3Zm13.5 0H21v4.5h-4.5ZM3 16.5h4.5V21H3Zm13.5 0H21V21h-4.5Z");
}
</style><path class="u4nxrux-a"/>`,
		"fallback": "uix-sharp:double-sharp",
	});
}

export default Component;
