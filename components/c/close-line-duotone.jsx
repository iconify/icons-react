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

.jm4-4_b1b {
  d: path("M19.0068 5L5.00684 19");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.urwe8bb9z {
  d: path("M19 19L5 5");
}
</style><g class="ipq1z-bjh"><path class="jm4-4_b1b"/><path class="urwe8bb9z"/></g>`,
		"fallback": "solar:close-line-duotone",
	});
}

export default Component;
