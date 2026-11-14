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
		"content": `<style>.b50y6u5ra {
  d: path("M7 13.5a5 7.5 0 1 0 10 0a5 7.5 0 1 0-10 0m5-11V6");
}

.gn_79dbkv {
  d: path("M7.25 11q4.75 2.5 9.5 0m-9.5 5q4.75 2.5 9.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b50y6u5ra"/><path class="gn_79dbkv"/></g>`,
		"fallback": "uix:cocoon",
	});
}

export default Component;
