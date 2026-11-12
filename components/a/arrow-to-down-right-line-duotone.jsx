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

.jczlw7b5o {
  d: path("M12 19.5L12 9.5C12 7.83333 13 4.5 17 4.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.mbxu6qbgd {
  stroke-linejoin: round;
  d: path("M7 14.5L12 19.5L17 14.5");
}
</style><g class="ipq1z-bjh"><path class="mbxu6qbgd"/><path class="jczlw7b5o"/></g>`,
		"fallback": "solar:arrow-to-down-right-line-duotone",
	});
}

export default Component;
