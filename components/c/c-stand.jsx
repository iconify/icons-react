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
		"content": `<style>.w91w6v0gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.5v17m0-6l-4.5 6m4.5-6l4.5 6M8 8h3.5m0 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM8 8h.01");
}
</style><path class="w91w6v0gm"/>`,
		"fallback": "uix-sharp:c-stand",
	});
}

export default Component;
