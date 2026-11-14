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

.m17c8xsca {
  d: path("M9 5.5h6a6.5 6.5 0 0 1 6.5 6.5a6.5 6.5 0 0 1-6.5 6.5H9A6.5 6.5 0 0 1 2.5 12A6.5 6.5 0 0 1 9 5.5M2.5 10h19");
}

.xi9eqh2nl {
  fill: currentColor;
  d: path("M12 14.25h.01");
}
</style><g class="hntgybcog"><path class="m17c8xsca"/><path class="xi9eqh2nl"/></g>`,
		"fallback": "uix:earbuds-case",
	});
}

export default Component;
