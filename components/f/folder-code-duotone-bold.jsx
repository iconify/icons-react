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

.kluv67b-o {
  d: path("M10.5 10 8 12.5l2.5 2.5");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s-3xhryje {
  d: path("m13.5 10 2.5 2.5 -2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r0jamibkm"/><path class="bn_pu6j-z"/><path class="kluv67b-o"/><path class="s-3xhryje"/></g>`,
		"fallback": "iconmind:folder-code-duotone-bold",
	});
}

export default Component;
