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
		"content": `<style>.fo5e-ozxe {
  d: path("M12 5L12 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tjvuacchn {
  fill: currentColor;
  d: path("M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="fo5e-ozxe"/><path class="tjvuacchn"/></g>`,
		"fallback": "keyline-icons:alert-duotone",
	});
}

export default Component;
