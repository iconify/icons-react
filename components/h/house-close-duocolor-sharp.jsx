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

.pane80bkq {
  stroke-opacity: 0.4;
  d: path("m10 12l4 4m0-4l-4 4");
}

.z_356sbxy {
  d: path("m16 7l4 4v10H4V11l8-8z");
}
</style><g class="nrj6p8qat"><path class="pane80bkq"/><path class="z_356sbxy"/></g>`,
		"fallback": "coolicons:house-close-duocolor-sharp",
	});
}

export default Component;
