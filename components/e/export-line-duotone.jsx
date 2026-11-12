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

.myq4vybmx {
  d: path("M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.x_hpbztkk {
  stroke-linejoin: round;
  d: path("M12 14L12 4M9 7L12 4L15 7");
}
</style><g class="ipq1z-bjh"><path class="myq4vybmx"/><path class="x_hpbztkk"/></g>`,
		"fallback": "solar:export-line-duotone",
	});
}

export default Component;
