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
		"content": `<style>.fu56vibry {
  stroke-opacity: 0.4;
  d: path("M10 10h.01M14 10h.01M10 14h.01M14 14h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zcptnc1hi {
  d: path("M3 6h18v12H3Zm4 0v12M17 6v12");
}
</style><g class="nrj6p8qat"><path class="fu56vibry"/><path class="zcptnc1hi"/></g>`,
		"fallback": "coolicons:bandage-duocolor-sharp",
	});
}

export default Component;
