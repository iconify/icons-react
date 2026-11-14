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
		"content": `<style>.a95ub6bhf {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jcobufi2a {
  d: path("M15.732 15.256a4.25 4.25 0 1 1 0-6.512M7.5 10.75h4.75m-4.75 2.5h4.75");
}
</style><g class="hntgybcog"><path class="a95ub6bhf"/><path class="jcobufi2a"/></g>`,
		"fallback": "uix:banknote-euro",
	});
}

export default Component;
