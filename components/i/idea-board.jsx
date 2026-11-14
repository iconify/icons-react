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
		"content": `<style>.c4_v7i59t {
  d: path("M5 3h14a2 2 0 0 1 2 2v10l-6 6H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nn8bz70tv {
  d: path("M21 15h-4a2 2 0 0 0-2 2v4m-6.25-7.25V12.5a3.75 3.75 0 1 1 4.5 0v1.25Zm.5 2.75h3.5");
}
</style><g class="hntgybcog"><path class="c4_v7i59t"/><path class="nn8bz70tv"/></g>`,
		"fallback": "uix:idea-board",
	});
}

export default Component;
