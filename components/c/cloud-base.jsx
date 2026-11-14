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
		"content": `<style>.a9ma7cbcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9.25h11.5a2.25 2.25 0 0 0 0-4.5a9 9 0 0 0-11.5 0a2.25 2.25 0 0 0 0 4.5ZM3 21.75h18M12 12v7m-1.75-5.25L12 12l1.75 1.75m-3.5 3.5L12 19l1.75-1.75");
}
</style><path class="a9ma7cbcp"/>`,
		"fallback": "uix-sharp:cloud-base",
	});
}

export default Component;
