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
		"content": `<style>.bzce2urmx {
  d: path("M12 19.5L12 9.5C12 7.83333 11 4.5 7 4.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.cpaeen2al {
  stroke-linejoin: round;
  d: path("M17 14.5L12 19.5L7 14.5");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="cpaeen2al"/><path class="bzce2urmx"/></g>`,
		"fallback": "solar:arrow-to-down-left-line-duotone",
	});
}

export default Component;
