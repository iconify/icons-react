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

.xwy_nd-iu {
  d: path("M12 8L12 21M16 16.625L12 21L8 16.625");
}

.zrpg8lbei {
  d: path("M20 3L4 3");
}
</style><g class="hntgybcog"><path class="zrpg8lbei"/><path class="xwy_nd-iu"/></g>`,
		"fallback": "solar:arrow-down-from-line-linear",
	});
}

export default Component;
