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
		"content": `<style>.ba_a_obvy {
  d: path("m8 16 4 -4");
}

.gob4qybps {
  fill: currentColor;
  d: path("M16 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h36909btm {
  d: path("M16 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.lazf-70yr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 8 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ld7zhcybq {
  fill: currentColor;
  d: path("M4 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nlznrubcp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 12h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pu4b1osbn {
  d: path("M12 12h3.5");
}

.syopwe25b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 16 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t1sjjacis {
  d: path("M4 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.u_41jqbcx {
  d: path("M4 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.vxdgzqbaj {
  fill: currentColor;
  d: path("M4 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z5135gcut {
  d: path("m8 8 4 4");
}
</style><g class="nrj6p8qat"><path class="vxdgzqbaj"/><path class="ld7zhcybq"/><path class="gob4qybps"/><path class="lazf-70yr"/><path class="syopwe25b"/><path class="nlznrubcp"/><path class="t1sjjacis"/><path class="u_41jqbcx"/><path class="z5135gcut"/><path class="ba_a_obvy"/><path class="pu4b1osbn"/><path class="h36909btm"/></g>`,
		"fallback": "iconmind:dag-duotone-regular",
	});
}

export default Component;
