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
		"content": `<style>.b-y5if5uj {
  d: path("M4 15H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hqmot3fke {
  d: path("M4 9H20");
}
</style><g class="hntgybcog"><path class="hqmot3fke"/><path class="b-y5if5uj"/></g>`,
		"fallback": "solar:equal-line-duotone",
	});
}

export default Component;
