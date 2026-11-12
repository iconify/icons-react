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

.p-1nc6b6p {
  d: path("M4 21L8 21M12 21L20 21");
}

.u09qwnbtf {
  d: path("M12 3L12 16M16 11.625L12 16L8 11.625");
}
</style><g class="hntgybcog"><path class="u09qwnbtf"/><path class="p-1nc6b6p"/></g>`,
		"fallback": "solar:arrow-down-to-line-broken",
	});
}

export default Component;
