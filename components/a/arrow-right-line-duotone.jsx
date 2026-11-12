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
		"content": `<style>.a1d08c85x {
  d: path("M4 12H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcro5da3g {
  d: path("M14 6L20 12L14 18");
}
</style><g class="hntgybcog"><path class="a1d08c85x"/><path class="vcro5da3g"/></g>`,
		"fallback": "solar:arrow-right-line-duotone",
	});
}

export default Component;
