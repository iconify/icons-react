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
		"content": `<style>.ew8lc9fxa {
  d: path("M10 11v6");
}

.fpad0ccyb {
  d: path("M14 11v6");
}

.nimfanbbl {
  d: path("M6 11v6");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yu4dpkbwa {
  d: path("M18 11v6");
}
</style><g class="s0phu2bbs"><path class="okud9xj_d"/><path class="rw6ho_bav"/><path class="nimfanbbl"/><path class="ew8lc9fxa"/><path class="fpad0ccyb"/><path class="yu4dpkbwa"/></g>`,
		"fallback": "iconmind:fuse-box-outline-bold",
	});
}

export default Component;
