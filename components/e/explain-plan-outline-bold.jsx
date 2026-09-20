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
		"content": `<style>.cwioy_h_g {
  d: path("M4 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fx4s06o2o {
  d: path("M6 13v-3h12v3");
}

.mhnr27bap {
  d: path("M12 7v3");
}

.nggq41d_a {
  d: path("M16 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="ymw3aibdo"/><path class="mhnr27bap"/><path class="fx4s06o2o"/><path class="cwioy_h_g"/><path class="nggq41d_a"/></g>`,
		"fallback": "iconmind:explain-plan-outline-bold",
	});
}

export default Component;
