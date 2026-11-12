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
		"content": `<style>.av7l1t06x {
  d: path("M10 10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm0-5a3.605 3.605 0 1 0-5 5m14 0a3.605 3.605 0 1 0-5-5m0 14a3.605 3.605 0 1 0 5-5M5 14a3.605 3.605 0 1 0 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.twtu48bgy {
  stroke-opacity: 0.4;
  d: path("m7 7l3 3m7-3l-3 3m-7 7l3-3m7 3l-3-3");
}
</style><g class="nrj6p8qat"><path class="twtu48bgy"/><path class="av7l1t06x"/></g>`,
		"fallback": "coolicons:drone-duocolor-round",
	});
}

export default Component;
