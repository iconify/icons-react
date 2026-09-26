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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.syl-c0ccg {
  d: path("M11 21L3 21L3 13");
}

.vxugm2o-n {
  stroke-opacity: 0.4;
  d: path("M13 3L21 3L21 11");
}
</style><g class="gp_8x1bzb"><path class="vxugm2o-n"/><path class="syl-c0ccg"/></g>`,
		"fallback": "keyline-icons:fullscreen-2-sharp-two-tone",
	});
}

export default Component;
