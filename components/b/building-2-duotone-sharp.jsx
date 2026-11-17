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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.rejo66cel {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18m-9 0V4H5v16m7-9.4L14 9l5 4v7");
}

.v0dc_vtyj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 4h7v16H5Z");
}
</style><g class="ft5dv1b6b"><path class="v0dc_vtyj"/><path class="rejo66cel"/></g>`,
		"fallback": "coolicons:building-2-duotone-sharp",
	});
}

export default Component;
