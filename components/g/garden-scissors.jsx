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
		"content": `<style>.owu0vk44o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 18.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm10 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-5.25-2.5l9-13.75m-2.5 13.75l-9-13.75");
}
</style><path class="owu0vk44o"/>`,
		"fallback": "uix-sharp:garden-scissors",
	});
}

export default Component;
