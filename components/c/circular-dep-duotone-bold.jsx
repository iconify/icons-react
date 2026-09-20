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
		"content": `<style>.gv5xmqiem {
  d: path("M14.39 5.42a7 7 0 0 1 0 13.16");
}

.h_wjg9bbr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.39 5.42a7 7 0 0 1 0 13.16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.miive7bad {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.61 18.58a7 7 0 0 1 0 -13.16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nuc2dr9ql {
  d: path("m12 16 -3 3 3 3");
}

.qck_wensm {
  d: path("M9.61 18.58a7 7 0 0 1 0 -13.16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}

.y5-n-db9c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m12 2 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zhxxi4f_a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m12 16 -3 3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="h_wjg9bbr"/><path class="miive7bad"/><path class="y5-n-db9c"/><path class="zhxxi4f_a"/><path class="gv5xmqiem"/><path class="qck_wensm"/><path class="wzx0dxb2r"/><path class="nuc2dr9ql"/></g>`,
		"fallback": "iconmind:circular-dep-duotone-bold",
	});
}

export default Component;
