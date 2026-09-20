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

.fml9t8nvu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 10h7l6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g5j0ssbtg {
  d: path("M6 10h7l6 6");
}

.q8-3-v_8e {
  d: path("M6 2v19");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t609-3u5f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 16H19v-3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xlc1jpzeg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 2v19");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="xlc1jpzeg"/><path class="fml9t8nvu"/><path class="t609-3u5f"/><path class="q8-3-v_8e"/><path class="g5j0ssbtg"/><path class="fforjyb_s"/></g>`,
		"fallback": "iconmind:exit-ramp-duotone-bold",
	});
}

export default Component;
