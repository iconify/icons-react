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
		"content": `<style>.fsa1f6jgs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l8 7v11H4V10zm2 9l-4 4m0-4h.01M14 16h.01");
}

.ft5dv1b6b {
  fill: none;
}

.qab80b9mo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 10v11H4V10l8-7Z");
}
</style><g class="ft5dv1b6b"><path class="qab80b9mo"/><path class="fsa1f6jgs"/></g>`,
		"fallback": "coolicons:house-percent-duotone-sharp",
	});
}

export default Component;
