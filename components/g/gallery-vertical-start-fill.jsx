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
		"content": `<style>.ggst7bcrg {
  fill: currentColor;
  d: path("M5 2L19 2C20.65685 2 22 3.34315 22 5L22 11C22 12.65685 20.65685 14 19 14L5 14C3.34315 14 2 12.65685 2 11L2 5C2 3.34315 3.34315 2 5 2Z");
  stroke: none;
}

.iag78lcrt {
  d: path("M5 17H19M7 21H17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ggst7bcrg"/><path class="iag78lcrt"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-start-fill",
	});
}

export default Component;
