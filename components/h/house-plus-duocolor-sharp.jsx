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
		"content": `<style>.mkz22f2th {
  stroke-opacity: 0.4;
  d: path("M9 14h6m-3-3v6");
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
</style><g class="nrj6p8qat"><path class="mkz22f2th"/><path class="z_356sbxy"/></g>`,
		"fallback": "coolicons:house-plus-duocolor-sharp",
	});
}

export default Component;
