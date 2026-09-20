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
		"content": `<style>.eq8-mlt7s {
  d: path("M16 3c-8 4 -8 14 0 18");
}

.hj3w73bum {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 3c8 4 8 14 0 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.l9y5p1bzr {
  d: path("M8 3c8 4 8 14 0 18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.um18atgqz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vvjpysbjc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 3c-8 4 -8 14 0 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="hj3w73bum"/><path class="vvjpysbjc"/><path class="um18atgqz"/><path class="l9y5p1bzr"/><path class="eq8-mlt7s"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:dna-duotone-bold",
	});
}

export default Component;
