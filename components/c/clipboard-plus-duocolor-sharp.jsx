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

.y7n4sgyet {
  d: path("M9 5H5v16h14V5h-4M9 5V3h6v2M9 5v2h6V5");
}
</style><g class="nrj6p8qat"><path class="mkz22f2th"/><path class="y7n4sgyet"/></g>`,
		"fallback": "coolicons:clipboard-plus-duocolor-sharp",
	});
}

export default Component;
