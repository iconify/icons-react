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
		"content": `<style>.mvog2i-tw {
  stroke-opacity: 0.4;
  d: path("M9 7h6M9 7h2a3 3 0 0 1 0 6H9l4 4m-4-7h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}
</style><g class="nrj6p8qat"><path class="mvog2i-tw"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:circle-currency-rupee-duocolor",
	});
}

export default Component;
