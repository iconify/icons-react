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
		"content": `<style>.npsy_-bll {
  d: path("M3 20h18M5 20v-7l5-4l5 4v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qzfq6dbor {
  stroke-opacity: 0.4;
  d: path("M7 11.4V4h12v16");
}
</style><g class="nrj6p8qat"><path class="qzfq6dbor"/><path class="npsy_-bll"/></g>`,
		"fallback": "coolicons:building-3-duocolor-sharp",
	});
}

export default Component;
