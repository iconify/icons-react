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
		"content": `<style>.c10bo3pxr {
  d: path("m9 10 6 6");
}

.jb50k2vnl {
  fill: currentColor;
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rk7t_gblt {
  d: path("m15 10 -6 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ss0frm8tj {
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
}
</style><g class="s0phu2bbs"><path class="jb50k2vnl"/><path class="ss0frm8tj"/><path class="c10bo3pxr"/><path class="rk7t_gblt"/></g>`,
		"fallback": "iconmind:access-deny-duotone-bold",
	});
}

export default Component;
