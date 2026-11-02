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
		"content": `<style>.kfasygb_e {
  stroke-opacity: 0.4;
  d: path("M3 17a9 9 0 0 1 18 0z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tz1-4meje {
  d: path("M8 9L6 6m10 3l2-3M8 13h.01M16 13h.01");
}
</style><g class="nrj6p8qat"><path class="kfasygb_e"/><path class="tz1-4meje"/></g>`,
		"fallback": "coolicons:android-duocolor-sharp",
	});
}

export default Component;
