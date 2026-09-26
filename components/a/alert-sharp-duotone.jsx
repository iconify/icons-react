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
		"content": `<style>.aitz_4enm {
  d: path("M12 4L12 16");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tjvuacchn {
  fill: currentColor;
  d: path("M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="aitz_4enm"/><path class="tjvuacchn"/></g>`,
		"fallback": "keyline-icons:alert-sharp-duotone",
	});
}

export default Component;
