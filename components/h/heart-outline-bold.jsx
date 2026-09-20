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

.pdm45_o_b {
  d: path("M4 9a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w_otj1bev {
  d: path("M12 9a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="pdm45_o_b"/><path class="w_otj1bev"/><path class="e1uudcbua"/></g>`,
		"fallback": "iconmind:heart-outline-bold",
	});
}

export default Component;
