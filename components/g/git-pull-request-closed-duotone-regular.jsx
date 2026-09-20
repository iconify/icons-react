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

.jgg5ctbbh {
  d: path("m15.5 16.5 5 5");
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

.kk_08-buh {
  d: path("m20.5 16.5 -5 5");
}

.kkt9mz_bi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15.5 16.5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kt27ibq7d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 7.5v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p7fbi4bqe {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m20.5 16.5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qecovn3xi {
  fill: currentColor;
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qn318hakm {
  d: path("M18 14V9h-6L9 6");
}

.tr91c8yof {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 14V9h-6L9 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="qecovn3xi"/><path class="jz0b4rbqp"/><path class="kt27ibq7d"/><path class="kkt9mz_bi"/><path class="p7fbi4bqe"/><path class="tr91c8yof"/><path class="kn0tcm93r"/><path class="k5nz3bcao"/><path class="fg8libqda"/><path class="jgg5ctbbh"/><path class="kk_08-buh"/><path class="qn318hakm"/></g>`,
		"fallback": "iconmind:git-pull-request-closed-duotone-regular",
	});
}

export default Component;
