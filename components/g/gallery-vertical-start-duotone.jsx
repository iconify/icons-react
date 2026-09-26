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
		"content": `<style>.azm_ndbml {
  d: path("M5 17L19 17M7 21L17 21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vdxipibqw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2L19 2C20.65685 2 22 3.34315 22 5L22 11C22 12.65685 20.65685 14 19 14L5 14C3.34315 14 2 12.65685 2 11L2 5C2 3.34315 3.34315 2 5 2Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="vdxipibqw"/><path class="azm_ndbml"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-start-duotone",
	});
}

export default Component;
