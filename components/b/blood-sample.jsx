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
		"content": `<style>.h87hz7bdo {
  d: path("M3.5 9.5h17m-17 0v12m17-12v12M7 3v13.5c0 1.1.9 2 2 2s2-.9 2-2V3m2 0v13.5c0 1.1.9 2 2 2s2-.9 2-2V3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5e85ebbg {
  fill: currentColor;
  d: path("M7 12.5h4v4c0 1.1-.9 2-2 2s-2-.9-2-2Zm6 0h4v4c0 1.1-.9 2-2 2s-2-.9-2-2Z");
}
</style><g class="hntgybcog"><path class="h87hz7bdo"/><path class="v5e85ebbg"/></g>`,
		"fallback": "uix:blood-sample",
	});
}

export default Component;
