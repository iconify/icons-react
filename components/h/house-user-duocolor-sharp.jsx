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
		"content": `<style>.j7k29qbyy {
  stroke-opacity: 0.4;
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 0 0-4 0M8 21a4 4 0 1 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z_356sbxy {
  d: path("m16 7l4 4v10H4V11l8-8z");
}
</style><g class="nrj6p8qat"><path class="j7k29qbyy"/><path class="z_356sbxy"/></g>`,
		"fallback": "coolicons:house-user-duocolor-sharp",
	});
}

export default Component;
