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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-rjevbjb {
  d: path("M2.75 7.25a2.5 2.5 0 0 1 2.5-2.5h3.6a2 2 0 0 1 1.6.8L11.55 7a2 2 0 0 0 1.6.8h5.6a2.5 2.5 0 0 1 2.5 2.5v8.45a2.5 2.5 0 0 1-2.5 2.5H5.25a2.5 2.5 0 0 1-2.5-2.5ZM12 7.5V15m-1.75-5H12m0 1.5h1.75m-3.5 1.5H12");
}

.j0zkl_74c {
  width: 2.5px;
  height: 4px;
  x: 10.75px;
  y: 15px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="i-rjevbjb"/><rect class="j0zkl_74c"/></g>`,
		"fallback": "iconoven:folder-zip",
	});
}

export default Component;
