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
		"content": `<style>.knl92tmrp {
  stroke-opacity: 0.4;
  d: path("M6 12h12M9 9l-3 3l3 3m6-6l3 3l-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xs6yp0hje {
  d: path("M3 5h18M3 19h18");
}
</style><g class="nrj6p8qat"><path class="knl92tmrp"/><path class="xs6yp0hje"/></g>`,
		"fallback": "coolicons:bandwidth-duocolor",
	});
}

export default Component;
