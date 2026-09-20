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
		"content": `<style>.a6m5p6bsi {
  d: path("M7 6.5h10");
}

.adbx-2otz {
  fill: currentColor;
  d: path("M7 13a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.pae1rfb4b {
  d: path("M7 13a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tturp2djn {
  d: path("M9 11a3 3 0 0 1 6 0");
}
</style><g class="s0phu2bbs"><path class="adbx-2otz"/><path class="pae1rfb4b"/><path class="tturp2djn"/><path class="fkf_gcbra"/><path class="lqcp5xb1v"/><path class="a6m5p6bsi"/></g>`,
		"fallback": "iconmind:cipher-suite-duotone-bold",
	});
}

export default Component;
