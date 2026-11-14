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
		"content": `<style>.bt-n2_26o {
  d: path("M10 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.fellzrbni {
  fill: currentColor;
  d: path("M10 9.75a5.5 5.5 0 0 1 4 0a5.5 5.5 0 0 1-2 3.5a5.5 5.5 0 0 1-2-3.5");
}

.fpb5dob1t {
  d: path("M3 9a5.5 5.5 0 1 0 11 0A5.5 5.5 0 1 0 3 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5gy7caza {
  d: path("M6.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="fpb5dob1t"/><path class="bt-n2_26o"/><path class="i5gy7caza"/><path class="fellzrbni"/></g>`,
		"fallback": "uix:colour-subtractive",
	});
}

export default Component;
