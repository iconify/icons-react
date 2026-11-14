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
		"content": `<style>.d8ky0n__m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.586 3.05l6.364 6.364l-3.536 3.536l-6.364-6.364Zm-.336 6.7L7.5 15.5m-4 3h11v3h-11Z");
}
</style><path class="d8ky0n__m"/>`,
		"fallback": "uix-sharp:ban-hammer",
	});
}

export default Component;
