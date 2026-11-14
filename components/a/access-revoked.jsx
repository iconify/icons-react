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
		"content": `<style>.woukp7a8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h5.5L8.75 9L11 12l-2 3l1.25 2.5H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm9.75 1h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H14.5L13.25 16l2-3L13 10ZM6 9h.01M17 15.25h2");
}
</style><path class="woukp7a8p"/>`,
		"fallback": "uix-sharp:access-revoked",
	});
}

export default Component;
