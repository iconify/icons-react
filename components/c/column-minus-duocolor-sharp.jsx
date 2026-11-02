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

.sueirabcw {
  d: path("M4 4h6v16H4Z");
}

.ub0p4xb7k {
  stroke-opacity: 0.4;
  d: path("M14 12h6");
}
</style><g class="nrj6p8qat"><path class="ub0p4xb7k"/><path class="sueirabcw"/></g>`,
		"fallback": "coolicons:column-minus-duocolor-sharp",
	});
}

export default Component;
