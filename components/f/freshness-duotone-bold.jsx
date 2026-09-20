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
		"content": `<style>.czeeg8b5o {
  d: path("M5 18.5A2.5 2.5 0 0 1 7.5 16h9a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5");
}

.hqoi59sxr {
  d: path("M12 9v7");
}

.j7rvusv0t {
  d: path("m12 9 5 -5");
}

.nb_m0nb2i {
  d: path("M12 9 7 4");
}

.pectmvbio {
  fill: currentColor;
  d: path("M5 18.5A2.5 2.5 0 0 1 7.5 16h9a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pectmvbio"/><path class="hqoi59sxr"/><path class="nb_m0nb2i"/><path class="j7rvusv0t"/><path class="czeeg8b5o"/></g>`,
		"fallback": "iconmind:freshness-duotone-bold",
	});
}

export default Component;
