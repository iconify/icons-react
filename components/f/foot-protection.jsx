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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-1ksnbrw {
  d: path("M8 7.5h4v6l3.5 1.25a1.5 1.5 0 0 1 1 1.4V17H8Zm5.5 7V17");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="r-1ksnbrw"/></g>`,
		"fallback": "iconoven:foot-protection",
	});
}

export default Component;
