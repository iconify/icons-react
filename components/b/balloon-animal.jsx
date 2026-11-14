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
		"content": `<style>.cc2za3jfn {
  d: path("M14.25 9.25a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iovzg6b-b {
  d: path("M5.75 13a4.75 2.25 0 1 0 9.5 0a4.75 2.25 0 1 0-9.5 0");
}

.jb3dn07_y {
  d: path("M15.75 5.25a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0M6.5 17.75a1.25 2.75 0 1 0 2.5 0a1.25 2.75 0 1 0-2.5 0m5.5 0a1.25 2.75 0 1 0 2.5 0a1.25 2.75 0 1 0-2.5 0m-8.5-7.5a1 2 0 1 0 2 0a1 2 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="iovzg6b-b"/><path class="cc2za3jfn"/><path class="jb3dn07_y"/></g>`,
		"fallback": "uix:balloon-animal",
	});
}

export default Component;
