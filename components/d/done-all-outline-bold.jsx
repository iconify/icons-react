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
		"content": `<style>.ks2swpbkw {
  d: path("m9 12 5 5 8 -8");
}

.r1gclvbbm {
  d: path("m2 12 5 5 8 -8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r1gclvbbm"/><path class="ks2swpbkw"/></g>`,
		"fallback": "iconmind:done-all-outline-bold",
	});
}

export default Component;
