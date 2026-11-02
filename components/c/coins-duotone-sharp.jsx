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

.qmx8ahsjp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3.472 6.664a6.001 6.001 0 1 1 11.055 4.674A6.001 6.001 0 0 1 3.472 6.664");
}

.rjggz6acn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9a5 5 0 1 0 10 0A5 5 0 0 0 4 9m14 2a5 5 0 1 1-7 7");
}
</style><g class="ft5dv1b6b"><path class="qmx8ahsjp"/><path class="rjggz6acn"/></g>`,
		"fallback": "coolicons:coins-duotone-sharp",
	});
}

export default Component;
