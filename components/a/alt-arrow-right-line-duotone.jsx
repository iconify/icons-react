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

.p9c0hjbwt {
  d: path("M12 8.5L15 12L9 19");
}

.x0q6h9bqn {
  d: path("M9 5L15 12L9 19");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="x0q6h9bqn"/><path class="p9c0hjbwt"/></g>`,
		"fallback": "solar:alt-arrow-right-line-duotone",
	});
}

export default Component;
