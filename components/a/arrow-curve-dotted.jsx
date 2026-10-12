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
		"content": `<style>.bhg2ekjvz {
  d: path("m13 8.75l4-4l4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj83ecbdh {
  d: path("M3.75 19.25c8 0 13.25-4.75 13.25-14.5");
}
</style><g class="hntgybcog"><path class="xj83ecbdh"/><path class="bhg2ekjvz"/></g>`,
		"fallback": "iconoven:arrow-curve-dotted",
	});
}

export default Component;
