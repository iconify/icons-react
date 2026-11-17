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

.odsjhlbmu {
  d: path("M4 3h16v18H4Zm0 6h16M8 6h.01M11 6h.01");
}

.ogq_ynllt {
  stroke-opacity: 0.4;
  d: path("M8 13h8");
}
</style><g class="nrj6p8qat"><path class="ogq_ynllt"/><path class="odsjhlbmu"/></g>`,
		"fallback": "coolicons:dishwasher-duocolor-sharp",
	});
}

export default Component;
