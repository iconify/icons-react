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

.j0ruifbpe {
  d: path("m4.528 18.045l6.316-7.645a1.5 1.5 0 0 1 2.312 0l6.316 7.645a1.5 1.5 0 0 1-1.157 2.455H5.685a1.5 1.5 0 0 1-1.157-2.455M12 9V3l4.5 1.5L12 6");
}

.uwkevkpjz {
  d: path("m9.5 20.5l2.5-5l2.5 5");
}
</style><g class="hntgybcog"><path class="j0ruifbpe"/><path class="uwkevkpjz"/></g>`,
		"fallback": "uix:command-post",
	});
}

export default Component;
