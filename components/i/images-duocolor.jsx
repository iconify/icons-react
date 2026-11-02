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

.t_9r6_app {
  stroke-opacity: 0.4;
  d: path("m3 17l4-4a1.414 1.414 0 0 1 2 0l2 2a1.414 1.414 0 0 0 2 0a1.414 1.414 0 0 1 2 0l2 2");
}

.uki7-b7bf {
  d: path("M7 3h12a2 2 0 0 1 2 2v12M3 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="nrj6p8qat"><path class="t_9r6_app"/><path class="uki7-b7bf"/></g>`,
		"fallback": "coolicons:images-duocolor",
	});
}

export default Component;
