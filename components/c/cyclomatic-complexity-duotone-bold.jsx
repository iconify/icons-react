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
		"content": `<style>.b_x7v_t0t {
  d: path("m12 7 3 3 -3 3 -3 -3Z");
}

.bx3fv3b8c {
  d: path("M12 13v4");
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.hd7idxb2m {
  fill: currentColor;
  d: path("m12 7 3 3 -3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hd7idxb2m"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="b_x7v_t0t"/><path class="bx3fv3b8c"/></g>`,
		"fallback": "iconmind:cyclomatic-complexity-duotone-bold",
	});
}

export default Component;
