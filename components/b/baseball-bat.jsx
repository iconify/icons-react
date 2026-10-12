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

.j18zj9mqg {
  d: path("m10.39 14.89l8.13-5.87a2.5 2.5 0 0 0-3.54-3.54l-5.87 8.13Zm-.64-.64l-5 5M3.5 18L6 20.5");
}

.tdcmh-bcw {
  cx: 6.75px;
  cy: 6.75px;
  r: 2.75px;
}
</style><g class="hntgybcog"><path class="j18zj9mqg"/><circle class="tdcmh-bcw"/></g>`,
		"fallback": "iconoven:baseball-bat",
	});
}

export default Component;
