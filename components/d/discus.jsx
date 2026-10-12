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
		"content": `<style>.dfe_vbchp {
  d: path("M4.75 13.5a8.25 4.75 0 1 0 16.5 0a8.25 4.75 0 1 0-16.5 0");
}

.dj18cvkfn {
  d: path("M7.75 13.5a5.25 1.75 0 1 0 10.5 0a5.25 1.75 0 1 0-10.5 0m-5-2.25C4.5 7.25 8.5 5.5 13 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dfe_vbchp"/><path class="dj18cvkfn"/></g>`,
		"fallback": "iconoven:discus",
	});
}

export default Component;
