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
		"content": `<style>.fforjyb_s {
  d: path("M15.5 16H19v-3.5");
}

.g5j0ssbtg {
  d: path("M6 10h7l6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8-3-v_8e {
  d: path("M6 2v19");
}
</style><g class="nrj6p8qat"><path class="q8-3-v_8e"/><path class="g5j0ssbtg"/><path class="fforjyb_s"/></g>`,
		"fallback": "iconmind:exit-ramp-outline-regular",
	});
}

export default Component;
