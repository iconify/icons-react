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

.utrwucb7m {
  fill: currentColor;
  d: path("M10.25 17.5a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0");
}

.wdrefqfmw {
  d: path("M10.25 13.75h.01m1.74-.5h.01m1.74.5h.01");
}

.xqpb3jbxr {
  d: path("M4 21.5L7 10h10l3 11.5ZM9.5 6.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="xqpb3jbxr"/><path class="utrwucb7m"/><path class="wdrefqfmw"/></g>`,
		"fallback": "uix:birth-weight",
	});
}

export default Component;
