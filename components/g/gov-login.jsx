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

.n7wasfztz {
  d: path("M10.25 9.5h3.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0V8a2 2 0 0 1 4 0v1.5");
}

.vjhci854a {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V13a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6.5A3.5 3.5 0 0 1 6 3m6 13.5v4m-3.5 0h7");
}
</style><g class="hntgybcog"><path class="vjhci854a"/><path class="n7wasfztz"/></g>`,
		"fallback": "uix:gov-login",
	});
}

export default Component;
