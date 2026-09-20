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
		"content": `<style>.e1uudcbua {
  d: path("m4 9 8 8 8 -8");
}

.f9d49zb0i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 9 8 8 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pdm45_o_b {
  d: path("M4 9a4 4 0 0 1 8 0");
}

.pfz2_tbyn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 9a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tfknh5b6c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w_otj1bev {
  d: path("M12 9a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="pfz2_tbyn"/><path class="tfknh5b6c"/><path class="f9d49zb0i"/><path class="pdm45_o_b"/><path class="w_otj1bev"/><path class="e1uudcbua"/></g>`,
		"fallback": "iconmind:heart-duotone-bold",
	});
}

export default Component;
