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
		"content": `<style>.bs41d9oln {
  d: path("m3 3 5 5");
}

.e0hukpisv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 3 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.erdfj7vbx {
  d: path("M10.5 7v3.5H7");
}

.o_nzgwnjk {
  d: path("m21 21 -5 -5");
}

.pxfg_wwnt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m21 21 -5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vtgsa7bep {
  d: path("M13.5 17v-3.5H17");
}

.xwir0_gdj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.5 17v-3.5H17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yhs2nzmvn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 7v3.5H7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="e0hukpisv"/><path class="yhs2nzmvn"/><path class="pxfg_wwnt"/><path class="xwir0_gdj"/><path class="bs41d9oln"/><path class="erdfj7vbx"/><path class="o_nzgwnjk"/><path class="vtgsa7bep"/></g>`,
		"fallback": "iconmind:conflict-duotone-bold",
	});
}

export default Component;
