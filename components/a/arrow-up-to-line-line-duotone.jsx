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
		"content": `<style>.ah9s1bcom {
  d: path("M4 3L20 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzotxgntu {
  d: path("M12 21L12 8M8 12.375L12 8L16 12.375");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="ah9s1bcom"/><path class="jzotxgntu"/></g>`,
		"fallback": "solar:arrow-up-to-line-line-duotone",
	});
}

export default Component;
