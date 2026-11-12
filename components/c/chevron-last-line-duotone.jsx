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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nk86z87vs {
  stroke-linejoin: round;
  d: path("M7.49997 5.00043L13.5 12.0004L7.49997 19.0004");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.p4t13zvsx {
  d: path("M16.5 19.0004L16.5 5.00003");
}
</style><g class="ipq1z-bjh"><path class="nk86z87vs"/><path class="p4t13zvsx"/></g>`,
		"fallback": "solar:chevron-last-line-duotone",
	});
}

export default Component;
