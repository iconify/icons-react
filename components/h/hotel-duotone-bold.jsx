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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.e_zu0lb2f {
  d: path("M10 22v-5h4v5");
}

.e-07m9b9c {
  d: path("M6 11h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uw3g4ocav {
  fill: currentColor;
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uxsptjbvt {
  d: path("M6 7h12");
}
</style><g class="s0phu2bbs"><path class="uw3g4ocav"/><path class="d5czi6rdr"/><path class="e_zu0lb2f"/><path class="uxsptjbvt"/><path class="e-07m9b9c"/></g>`,
		"fallback": "iconmind:hotel-duotone-bold",
	});
}

export default Component;
