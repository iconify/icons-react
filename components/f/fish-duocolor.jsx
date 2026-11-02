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
		"content": `<style>.jd_0ujzkm {
  stroke-opacity: 0.4;
  d: path("M12 10c1 1 1 3 0 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pk_rosbpc {
  d: path("M3 12c2-4 5-7 8-7s5 3 6 5l4-4l-2 6l2 6l-4-4c-1 2-3 5-6 5s-6-3-8-7m5-1h.01");
}
</style><g class="nrj6p8qat"><path class="jd_0ujzkm"/><path class="pk_rosbpc"/></g>`,
		"fallback": "coolicons:fish-duocolor",
	});
}

export default Component;
