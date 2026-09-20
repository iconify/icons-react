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
		"content": `<style>.ez39r6bms {
  d: path("M17 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qoupp8b_p {
  d: path("M4 4v16h8V4Z");
}
</style><g class="nrj6p8qat"><path class="qoupp8b_p"/><path class="ez39r6bms"/></g>`,
		"fallback": "iconmind:aisle-seat-outline-regular",
	});
}

export default Component;
