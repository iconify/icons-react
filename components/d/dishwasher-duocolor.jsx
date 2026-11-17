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

.ogq_ynllt {
  stroke-opacity: 0.4;
  d: path("M8 13h8");
}

.yvkga2f9j {
  d: path("M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 4h16M8 6h.01M11 6h.01");
}
</style><g class="nrj6p8qat"><path class="ogq_ynllt"/><path class="yvkga2f9j"/></g>`,
		"fallback": "coolicons:dishwasher-duocolor",
	});
}

export default Component;
