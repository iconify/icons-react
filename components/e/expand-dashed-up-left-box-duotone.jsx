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
		"content": `<style>.d10vn_dws {
  stroke-opacity: 0.4;
  d: path("M3 8L3 6M6 3L8 3M11 6L11 8M6 11L8 11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zoniwibdn {
  d: path("M13 18L3 18M6 15L3 18L6 21M18 13L18 3M21 6L18 3L15 6");
}
</style><g class="nrj6p8qat"><path class="zoniwibdn"/><path class="d10vn_dws"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-left-box-duotone",
	});
}

export default Component;
