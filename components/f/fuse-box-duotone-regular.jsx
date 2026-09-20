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
		"content": `<style>.ehzfylb8o {
  fill: currentColor;
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ew8lc9fxa {
  d: path("M10 11v6");
}

.fpad0ccyb {
  d: path("M14 11v6");
}

.nimfanbbl {
  d: path("M6 11v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.yu4dpkbwa {
  d: path("M18 11v6");
}
</style><g class="nrj6p8qat"><path class="ehzfylb8o"/><path class="okud9xj_d"/><path class="rw6ho_bav"/><path class="nimfanbbl"/><path class="ew8lc9fxa"/><path class="fpad0ccyb"/><path class="yu4dpkbwa"/></g>`,
		"fallback": "iconmind:fuse-box-duotone-regular",
	});
}

export default Component;
