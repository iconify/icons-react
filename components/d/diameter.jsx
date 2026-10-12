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
		"content": `<style>.d993r-bho {
  d: path("M12 2.75a9.25 9.25 0 1 1 0 18.5a9.25 9.25 0 1 1 0-18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m85ry_-if {
  d: path("M5.75 12h12.5M8 9.75L5.75 12L8 14.25m8-4.5L18.25 12L16 14.25");
}
</style><g class="hntgybcog"><path class="d993r-bho"/><path class="m85ry_-if"/></g>`,
		"fallback": "iconoven:diameter",
	});
}

export default Component;
