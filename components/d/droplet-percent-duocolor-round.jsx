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
		"content": `<style>.ht3krccrn {
  d: path("M12 3S5 8 5 14a7 7 0 0 0 14 0c0-6-7-11-7-11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y2esomwaf {
  stroke-opacity: 0.4;
  d: path("m14 12l-4 4m0-4h.01M14 16h.01");
}
</style><g class="nrj6p8qat"><path class="y2esomwaf"/><path class="ht3krccrn"/></g>`,
		"fallback": "coolicons:droplet-percent-duocolor-round",
	});
}

export default Component;
