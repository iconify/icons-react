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

.lsmp5137y {
  d: path("M4.25 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 13a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m11-2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.uk3n2uz6m {
  d: path("M6.5 7.75v8.5m0-8.5c0 4.75 4 8.75 8.75 8.75");
}
</style><g class="hntgybcog"><path class="uk3n2uz6m"/><path class="lsmp5137y"/></g>`,
		"fallback": "uix:code-merge",
	});
}

export default Component;
