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
		"content": `<style>.tko691b5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.414 3.343l4.243 4.243l-7.071 7.071l-4.243-4.243Zm-6.364 7.778l2.829 2.829l-1.415 1.414l-4.596-1.061ZM3 19.5h11");
}
</style><path class="tko691b5z"/>`,
		"fallback": "uix-sharp:highlighter-pen",
	});
}

export default Component;
