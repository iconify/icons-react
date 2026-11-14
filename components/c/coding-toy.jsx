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
		"content": `<style>.tb3ddgb_e {
  d: path("M6.5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-4-7.5h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoz5tybmy {
  d: path("M5 6.5h14V17H5ZM12 3v3.5");
}
</style><g class="ulnmmdpxh"><path class="uoz5tybmy"/><path class="tb3ddgb_e"/></g>`,
		"fallback": "uix-sharp:coding-toy",
	});
}

export default Component;
