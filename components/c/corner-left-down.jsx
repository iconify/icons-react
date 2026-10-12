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
		"content": `<style>.g7r2n3-ke {
  d: path("m13 15.5l-3.75 3.75L5.5 15.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it_1vublq {
  d: path("M19.75 4.25h-8a2.5 2.5 0 0 0-2.5 2.5v12.5");
}
</style><g class="hntgybcog"><path class="it_1vublq"/><path class="g7r2n3-ke"/></g>`,
		"fallback": "iconoven:corner-left-down",
	});
}

export default Component;
