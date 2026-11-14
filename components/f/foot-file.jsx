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
		"content": `<style>.a59ey1bbb {
  d: path("m9.172 12.707l2.121 2.121l-4.95 4.95l-2.121-2.121Zm7.071-4.95h.01m-1.955 1.945h.01m-1.954 1.944h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw7qn1ssj {
  d: path("m17.303 3.868l2.829 2.829a1.5 1.5 0 0 1 0 2.121l-6.364 6.364a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.122l6.364-6.364a1.5 1.5 0 0 1 2.121 0Z");
}
</style><g class="ulnmmdpxh"><path class="zw7qn1ssj"/><path class="a59ey1bbb"/></g>`,
		"fallback": "uix-sharp:foot-file",
	});
}

export default Component;
