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
		"content": `<style>.dc0-cc4jx {
  d: path("M7.25 14.5V19M5 16.75h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pbv9mubxl {
  d: path("m11.13 8.87l1.44-1.44q.53-.53 1.06 0l2.94 2.94q.53.53 0 1.06l-1.44 1.44q-.53.53-1.06 0l-2.94-2.94q-.53-.53 0-1.06m3.97.03l5.65-5.65");
}

.s9lus4bax {
  cx: 7.25px;
  cy: 16.75px;
  r: 4.5px;
}
</style><g class="hntgybcog"><path class="pbv9mubxl"/><circle class="s9lus4bax"/><path class="dc0-cc4jx"/></g>`,
		"fallback": "iconoven:healing-brush",
	});
}

export default Component;
