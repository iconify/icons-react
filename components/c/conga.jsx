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

.x318-hbjq {
  d: path("M6.5 5.25a5.5 2.25 0 1 0 11 0a5.5 2.25 0 1 0-11 0");
}

.z2xfy_bor {
  d: path("M6.5 5.25c-.5 4 .25 7.25 1.75 10.5L9 20.5q.1.75.75.75h4.5q.65 0 .75-.75l.75-4.75c1.5-3.25 2.25-6.5 1.75-10.5a5.5 2.25 0 0 1-11 0");
}
</style><g class="hntgybcog"><path class="z2xfy_bor"/><path class="x318-hbjq"/></g>`,
		"fallback": "iconoven:conga",
	});
}

export default Component;
