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

.mpam14vqp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l5 3l3 4v11H4V10l3-4zM3 21h18M9 21v-5h6v5m-5-11a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.phq9obcdm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l5 3l3 4v11h-5v-5H9v5H4V10l3-4Zm-2 7a2 2 0 1 0 3.999.001A2 2 0 0 0 10 10");
}
</style><g class="ft5dv1b6b"><path class="phq9obcdm"/><path class="mpam14vqp"/></g>`,
		"fallback": "coolicons:barn-duotone-sharp",
	});
}

export default Component;
