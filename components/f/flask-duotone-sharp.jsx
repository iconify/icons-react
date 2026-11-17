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
		"content": `<style>.auwowsroz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 15l3 6H4l3-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.jr02fp_yr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 3v6L4 21h16L14 9V3M8 3h8M7 15h10");
}
</style><g class="ft5dv1b6b"><path class="auwowsroz"/><path class="jr02fp_yr"/></g>`,
		"fallback": "coolicons:flask-duotone-sharp",
	});
}

export default Component;
