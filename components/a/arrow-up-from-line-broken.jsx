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

.n-e1qqb_j {
  d: path("M12 16L12 3M8 7.375L12 3L16 7.375");
}

.p-1nc6b6p {
  d: path("M4 21L8 21M12 21L20 21");
}
</style><g class="hntgybcog"><path class="p-1nc6b6p"/><path class="n-e1qqb_j"/></g>`,
		"fallback": "solar:arrow-up-from-line-broken",
	});
}

export default Component;
