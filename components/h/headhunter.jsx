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
		"content": `<style>.c8qxpiqga {
  d: path("M3.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0ZM12 2.5v3m0 13v3M2.5 12h3m13 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-7wj1bbs {
  d: path("M9.75 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 16.5a3.5 3.5 0 0 1 7 0");
}
</style><g class="ulnmmdpxh"><path class="c8qxpiqga"/><path class="w-7wj1bbs"/></g>`,
		"fallback": "uix-sharp:headhunter",
	});
}

export default Component;
