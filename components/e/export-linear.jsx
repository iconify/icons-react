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
		"content": `<style>.i2p-_hbwz {
  d: path("M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_hpbztkk {
  stroke-linejoin: round;
  d: path("M12 14L12 4M9 7L12 4L15 7");
}
</style><g class="ipq1z-bjh"><path class="i2p-_hbwz"/><path class="x_hpbztkk"/></g>`,
		"fallback": "solar:export-linear",
	});
}

export default Component;
