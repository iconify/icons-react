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
		"content": `<style>.cc6f4z87h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H11c3.5 0 5.5-3.5 10.5-3.5v9h-19Zm2 5.5l.5 7.5M19.5 13l-.5 7.5M2.5 10.25H10");
}
</style><path class="cc6f4z87h"/>`,
		"fallback": "uix-sharp:harpsichord",
	});
}

export default Component;
