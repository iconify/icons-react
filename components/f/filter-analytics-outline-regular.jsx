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
		"content": `<style>.ib0uz7xmw {
  d: path("M10 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vrfr-0-4l {
  d: path("M3 4h18l-7 7v5h-4v-5Z");
}
</style><g class="nrj6p8qat"><path class="vrfr-0-4l"/><path class="ib0uz7xmw"/></g>`,
		"fallback": "iconmind:filter-analytics-outline-regular",
	});
}

export default Component;
