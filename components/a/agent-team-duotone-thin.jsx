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

.gzq1vrb2e {
  d: path("M18.5 3.83a3.5 3.5 0 1 1 -2.96 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3z4_xsst {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18.5 3.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s4e5gyxqe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sb4s9qcnb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.5 3.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sy50-cc1z {
  d: path("M18.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}

.v8l-dacwq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.veuek9f-x {
  d: path("M8.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}
</style><g class="hntgybcog"><path class="sb4s9qcnb"/><path class="n3z4_xsst"/><path class="v8l-dacwq"/><path class="s4e5gyxqe"/><path class="bpiqilekb"/><path class="gzq1vrb2e"/><path class="veuek9f-x"/><path class="sy50-cc1z"/></g>`,
		"fallback": "iconmind:agent-team-duotone-thin",
	});
}

export default Component;
