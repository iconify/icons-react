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

.lzc0iw4ot {
  d: path("M9 6H18V15");
}

.ygpzi6bzb {
  d: path("M6 18L18 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="ygpzi6bzb"/><path class="lzc0iw4ot"/></g>`,
		"fallback": "solar:arrow-right-up-line-duotone",
	});
}

export default Component;
