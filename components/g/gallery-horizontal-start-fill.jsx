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
		"content": `<style>.lcapyy5bh {
  d: path("M17 5V19M21 7V17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sl3coc4dw {
  fill: currentColor;
  d: path("M5 2L11 2C12.65685 2 14 3.34315 14 5L14 19C14 20.65685 12.65685 22 11 22L5 22C3.34315 22 2 20.65685 2 19L2 5C2 3.34315 3.34315 2 5 2Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="sl3coc4dw"/><path class="lcapyy5bh"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-start-fill",
	});
}

export default Component;
