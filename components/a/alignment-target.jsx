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
		"content": `<style>.dh0sdhbvt {
  d: path("M12 5.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 1 1 0-13m0-2.75V5.5m0 13v2.75M2.75 12H5.5m13 0h2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsxy7_ibl {
  d: path("M12 8.5q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5");
}
</style><g class="hntgybcog"><path class="dh0sdhbvt"/><path class="xsxy7_ibl"/></g>`,
		"fallback": "iconoven:alignment-target",
	});
}

export default Component;
