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
		"content": `<style>.fhtkvnjef {
  stroke-opacity: 0.4;
  d: path("M6 12h12m-6-6v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wy01nzbdr {
  d: path("M3 3h.01M9 3h.01M15 3h.01M21 3h-.01M21 9h-.01m.01 6h-.01m.01 6h-.01M15 21h.01M9 21h.01M3 21h.01M3 15h.01M3 9h.01");
}
</style><g class="nrj6p8qat"><path class="fhtkvnjef"/><path class="wy01nzbdr"/></g>`,
		"fallback": "coolicons:border-inner-duocolor-round",
	});
}

export default Component;
