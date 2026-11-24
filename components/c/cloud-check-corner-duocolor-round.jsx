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
		"content": `<style>.cjcrnhgsj {
  d: path("M7 19A5 5 0 0 1 7 9c1.819-6.366 9.428-6.115 10.79 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok8l_-wct {
  stroke-opacity: 0.4;
  d: path("m13 17l3 3l5-6");
}
</style><g class="nrj6p8qat"><path class="ok8l_-wct"/><path class="cjcrnhgsj"/></g>`,
		"fallback": "coolicons:cloud-check-corner-duocolor-round",
	});
}

export default Component;
