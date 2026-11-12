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

.is08t52yx {
  d: path("M3 20L3 4");
}

.yzr2dtb9o {
  d: path("M21 12L8 12M12.375 16L8 12L12.375 8");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="is08t52yx"/><path class="yzr2dtb9o"/></g>`,
		"fallback": "solar:arrow-left-to-line-line-duotone",
	});
}

export default Component;
