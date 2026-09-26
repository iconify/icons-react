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
		"content": `<style>.j866dzgsj {
  stroke-opacity: 0.4;
  d: path("M16 3L18 3M21 6L21 8M18 11L16 11M13 6L13 8");
}

.mjqfv50gi {
  d: path("M6 13L6 3M9 6L6 3L3 6M11 18L21 18M18 21L21 18L18 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mjqfv50gi"/><path class="j866dzgsj"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-right-box-duotone",
	});
}

export default Component;
