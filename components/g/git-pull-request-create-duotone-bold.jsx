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
		"content": `<style>.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h55f46bdv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 7.5v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jz0b4rbqp {
  fill: currentColor;
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k5nz3bcao {
  d: path("M6 7.5v9");
}

.kj68giyfr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 4v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ktrpk1wvf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 6.5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l_raegbyq {
  d: path("M15.5 6.5h5");
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.qecovn3xi {
  fill: currentColor;
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.st2iv5bfu {
  fill: currentColor;
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w7fxcjk_f {
  d: path("M18 4v5");
}
</style><g class="s0phu2bbs"><path class="qecovn3xi"/><path class="jz0b4rbqp"/><path class="st2iv5bfu"/><path class="h55f46bdv"/><path class="kj68giyfr"/><path class="ktrpk1wvf"/><path class="kn0tcm93r"/><path class="k5nz3bcao"/><path class="fg8libqda"/><path class="pw61xnbei"/><path class="w7fxcjk_f"/><path class="l_raegbyq"/></g>`,
		"fallback": "iconmind:git-pull-request-create-duotone-bold",
	});
}

export default Component;
