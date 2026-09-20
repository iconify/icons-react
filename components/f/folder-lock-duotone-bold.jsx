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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.hbodyhbmj {
  fill: currentColor;
  d: path("M9 12h6v5H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l9hu2h1fj {
  d: path("M9 12h6v5H9Z");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
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

.tn8-gc8mv {
  d: path("M10 12a2 2 0 0 1 4 0");
}
</style><g class="s0phu2bbs"><path class="r0jamibkm"/><path class="hbodyhbmj"/><path class="bn_pu6j-z"/><path class="l9hu2h1fj"/><path class="tn8-gc8mv"/></g>`,
		"fallback": "iconmind:folder-lock-duotone-bold",
	});
}

export default Component;
