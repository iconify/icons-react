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
		"content": `<style>.fy5x_k90i {
  d: path("M8.5 14.5c1 1.5 2.1 2.25 3.5 2.25s2.5-.75 3.5-2.25");
}

.rg8vv8bhj {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 10h.01M15 10h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rg8vv8bhj"/><path class="fy5x_k90i"/></g>`,
		"fallback": "uix-sharp:emoji-smile",
	});
}

export default Component;
