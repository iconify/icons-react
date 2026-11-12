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

.nijop-bue {
  d: path("M21 18L15 12L21 6");
}

.u4u9d1-mz {
  d: path("M3 18L9 12L3 6");
}
</style><g class="hntgybcog"><path class="nijop-bue"/><path class="u4u9d1-mz"/></g>`,
		"fallback": "solar:chevrons-right-left-linear",
	});
}

export default Component;
