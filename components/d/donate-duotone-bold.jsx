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
		"content": `<style>.bm68p9f0y {
  d: path("M6.5 10.5v3");
}

.h51gqww2n {
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.j5hk4ybky {
  fill: currentColor;
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
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

.vxkjkxmgz {
  fill: currentColor;
  d: path("M14 9a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 1 4 0l-4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wuryx9-rm {
  d: path("M14 9a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 1 4 0l-4 4Z");
}
</style><g class="s0phu2bbs"><path class="j5hk4ybky"/><path class="vxkjkxmgz"/><path class="h51gqww2n"/><path class="bm68p9f0y"/><path class="wuryx9-rm"/></g>`,
		"fallback": "iconmind:donate-duotone-bold",
	});
}

export default Component;
