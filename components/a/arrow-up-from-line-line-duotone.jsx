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
		"content": `<style>.a8axvdbak {
  d: path("M20 21L4 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tg58zp32w {
  d: path("M12 16L12 3M16 7.375L12 3L8 7.375");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="a8axvdbak"/><path class="tg58zp32w"/></g>`,
		"fallback": "solar:arrow-up-from-line-line-duotone",
	});
}

export default Component;
