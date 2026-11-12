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

.vpe2ajr8p {
  d: path("M3 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}

.zv47j2bxe {
  stroke-opacity: 0.4;
  d: path("M7 21h10a4 4 0 0 0 4-4V7");
}
</style><g class="nrj6p8qat"><path class="zv47j2bxe"/><path class="vpe2ajr8p"/></g>`,
		"fallback": "coolicons:drop-shadow-duocolor-round",
	});
}

export default Component;
