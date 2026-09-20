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
		"content": `<style>.abchdfb3i {
  d: path("M4 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ss47z8bxu {
  d: path("M20 8c0 6 -3 9 -8 9 0 -6 3 -9 8 -9");
}

.wiyigspfz {
  d: path("M7 4v10");
}
</style><g class="hntgybcog"><path class="wiyigspfz"/><path class="abchdfb3i"/><path class="ss47z8bxu"/></g>`,
		"fallback": "iconmind:climate-outline-thin",
	});
}

export default Component;
