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
		"content": `<style>.c1nxh3m2e {
  d: path("m9 15 5 5 5 -5");
}

.d0ex_jw9s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4h10v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g2-f5r0za {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 15 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g5tlcslpz {
  d: path("M4 4h10v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d0ex_jw9s"/><path class="g2-f5r0za"/><path class="g5tlcslpz"/><path class="c1nxh3m2e"/></g>`,
		"fallback": "iconmind:corner-right-down-duotone-bold",
	});
}

export default Component;
