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
		"content": `<style>.dx5s6zbrc {
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.syrab3bug {
  d: path("M15.5 9.5 19 6v12l-3.5 -3.5");
}

.yseexlbcu {
  d: path("M8.5 9.5 5 6v12l3.5 -3.5");
}

.z705ggbcg {
  fill: currentColor;
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z705ggbcg"/><path class="dx5s6zbrc"/><path class="yseexlbcu"/><path class="syrab3bug"/></g>`,
		"fallback": "iconmind:candy-duotone-bold",
	});
}

export default Component;
