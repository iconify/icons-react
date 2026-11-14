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
		"content": `<style>.ciw3f0c3d {
  d: path("M6 3.5v8h7.5l3 6h4m-2.25 3a.25.25 0 1 0 .5 0a.25.25 0 1 0-.5 0M8.5 14l-1 2.5H9L8 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xz88pys9y {
  d: path("M3.5 16.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="xz88pys9y"/><path class="ciw3f0c3d"/></g>`,
		"fallback": "uix:electric-wheelchair",
	});
}

export default Component;
