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
		"content": `<style>.mtcmbacxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM9 16.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM7.5 8.5h.01m8.99 0h.01M12 16.25h.01");
}
</style><path class="mtcmbacxc"/>`,
		"fallback": "uix-sharp:frog-spawn",
	});
}

export default Component;
