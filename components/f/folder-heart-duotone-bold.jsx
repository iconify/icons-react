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

.p4w7mzbtz {
  fill: currentColor;
  d: path("M8.5 12a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0L12 15.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r5gr43bip {
  d: path("M8.5 12a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0L12 15.5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r0jamibkm"/><path class="p4w7mzbtz"/><path class="bn_pu6j-z"/><path class="r5gr43bip"/></g>`,
		"fallback": "iconmind:folder-heart-duotone-bold",
	});
}

export default Component;
