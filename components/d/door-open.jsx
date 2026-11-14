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
		"content": `<style>.b4mpo5bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 20 5v16.5M10 5L3.5 2.5v19L10 20Zm-3.75 7.5h.01");
}
</style><path class="b4mpo5bvo"/>`,
		"fallback": "uix-sharp:door-open",
	});
}

export default Component;
