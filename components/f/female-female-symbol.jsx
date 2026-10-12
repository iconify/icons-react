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
		"content": `<style>.euh_8jbah {
  d: path("M9 3.75a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 1 1 0-9.5m0 9.5v8m-1.5-3.5h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ubpr89usi {
  d: path("M15 3.75a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 1 1 0-9.5m0 9.5v8m-1.5-3.5h3");
}
</style><g class="hntgybcog"><path class="euh_8jbah"/><path class="ubpr89usi"/></g>`,
		"fallback": "iconoven:female-female-symbol",
	});
}

export default Component;
