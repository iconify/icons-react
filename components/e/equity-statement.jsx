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
		"content": `<style>.d1x0n1r2j {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M11 13h4a4 4 0 1 0-4 4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwkba9b0c {
  d: path("M13 15h4a4 4 0 0 1-4 4Z");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="d1x0n1r2j"/><path class="jwkba9b0c"/></g>`,
		"fallback": "uix:equity-statement",
	});
}

export default Component;
