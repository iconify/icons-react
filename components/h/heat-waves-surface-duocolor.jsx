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
		"content": `<style>.iarrgtb_j {
  stroke-opacity: 0.4;
  d: path("M7 13q2.221-2.5 0-5t0-5m5 10q2.221-2.5 0-5t0-5m5 10q2.222-2.5 0-5t0-5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xsg7yzbhi {
  d: path("M3 19a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2");
}
</style><g class="nrj6p8qat"><path class="iarrgtb_j"/><path class="xsg7yzbhi"/></g>`,
		"fallback": "coolicons:heat-waves-surface-duocolor",
	});
}

export default Component;
