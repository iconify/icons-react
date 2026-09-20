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
		"content": `<style>.buvqhc29l {
  d: path("M2 15a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.dhcdkb-uh {
  d: path("m18 9 -3 -3");
}

.hl79yp-tj {
  d: path("M6 4h12v5");
}

.j12otbcul {
  d: path("m8 17 3 3 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tvqt3g5ez {
  fill: currentColor;
  d: path("M2 15a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="tvqt3g5ez"/><path class="buvqhc29l"/><path class="hl79yp-tj"/><path class="dhcdkb-uh"/><path class="j12otbcul"/></g>`,
		"fallback": "iconmind:idempotent-load-duotone-bold",
	});
}

export default Component;
