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
		"content": `<style>.m-x87r2jp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v-6a3 3 0 0 1 0 6Zm0 0h6a3 3 0 0 1-6 0Zm0 0v6a3 3 0 0 1 0-6Zm0 0H6a3 3 0 0 1 6 0Zm0 6v7");
}
</style><path class="m-x87r2jp"/>`,
		"fallback": "uix-sharp:bird-scarer",
	});
}

export default Component;
