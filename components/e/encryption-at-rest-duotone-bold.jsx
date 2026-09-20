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

.eh3r5zbug {
  fill: currentColor;
  d: path("M9 13.5h6v3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jluoio_sz {
  d: path("M9 13.5h6v3H9Z");
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

.v00cs4edx {
  d: path("M10.5 13.5a1.5 1.5 0 0 1 3 0");
}
</style><g class="s0phu2bbs"><path class="r0jamibkm"/><path class="eh3r5zbug"/><path class="bn_pu6j-z"/><path class="jluoio_sz"/><path class="v00cs4edx"/></g>`,
		"fallback": "iconmind:encryption-at-rest-duotone-bold",
	});
}

export default Component;
