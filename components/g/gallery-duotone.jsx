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
		"content": `<style>.a7pdv8beo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z");
}

.ft5dv1b6b {
  fill: none;
}

.sg_wo6bmq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 8l5-5a1.414 1.414 0 0 1 2 0l3 3a1.414 1.414 0 0 0 2 0l1-1a1.414 1.414 0 0 1 2 0l3 3M3 21h7m4 0h7");
}
</style><g class="ft5dv1b6b"><path class="a7pdv8beo"/><path class="sg_wo6bmq"/></g>`,
		"fallback": "coolicons:gallery-duotone",
	});
}

export default Component;
