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
		"content": `<style>.bpiqilekb {
  d: path("M8.5 3.83a3.5 3.5 0 1 1 -2.96 0");
}

.gpr8klhfi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.5 3.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzq1vrb2e {
  d: path("M18.5 3.83a3.5 3.5 0 1 1 -2.96 0");
}

.h8cz36kqk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.5 3.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jqv9nhb4v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rf8dfk41t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sy50-cc1z {
  d: path("M18.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}

.veuek9f-x {
  d: path("M8.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}
</style><g class="s0phu2bbs"><path class="gpr8klhfi"/><path class="h8cz36kqk"/><path class="jqv9nhb4v"/><path class="rf8dfk41t"/><path class="bpiqilekb"/><path class="gzq1vrb2e"/><path class="veuek9f-x"/><path class="sy50-cc1z"/></g>`,
		"fallback": "iconmind:agent-team-duotone-bold",
	});
}

export default Component;
