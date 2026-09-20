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
		"content": `<style>.d1zyr9bfc {
  d: path("M12 4v4");
}

.duxnt0uao {
  d: path("M10.5 15h3");
}

.f4f56br_e {
  d: path("M10.5 12H8v6h2.5");
}

.j534ltbcb {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.krhqhqb8m {
  d: path("M13.5 12H16v6h-2.5");
}

.m1mjigbsi {
  d: path("M4 8h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="j534ltbcb"/><path class="m1mjigbsi"/><path class="d1zyr9bfc"/><path class="f4f56br_e"/><path class="krhqhqb8m"/><path class="duxnt0uao"/></g>`,
		"fallback": "iconmind:delivery-window-outline-bold",
	});
}

export default Component;
