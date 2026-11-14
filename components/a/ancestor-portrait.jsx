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
		"content": `<style>.d-y-mqg9z {
  d: path("M6.125 2.5h11.75A2.625 2.625 0 0 1 20.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875V5.125A2.625 2.625 0 0 1 6.125 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p1bfacbcf {
  d: path("M6.5 12a5.5 7 0 1 0 11 0a5.5 7 0 1 0-11 0");
}

.sj9hd9epf {
  d: path("M9.75 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.5 17.5c.5-1.75 2-2.75 3.5-2.75s3 1 3.5 2.75");
}
</style><g class="hntgybcog"><path class="d-y-mqg9z"/><path class="p1bfacbcf"/><path class="sj9hd9epf"/></g>`,
		"fallback": "uix:ancestor-portrait",
	});
}

export default Component;
