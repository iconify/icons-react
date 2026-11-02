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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrgtqqgqc {
  stroke-opacity: 0.4;
  d: path("M20 10v5");
}

.v2agifbex {
  d: path("m20 10l-8 4l-8-4l8-4zM8 12v4c0 1.105 1.79 2 4 2s4-.895 4-2v-4");
}
</style><g class="nrj6p8qat"><path class="rrgtqqgqc"/><path class="v2agifbex"/></g>`,
		"fallback": "coolicons:graduation-cap-duocolor",
	});
}

export default Component;
