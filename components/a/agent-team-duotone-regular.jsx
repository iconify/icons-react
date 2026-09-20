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

.euogk39-q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gebq_v7-y {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18.5 3.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzq1vrb2e {
  d: path("M18.5 3.83a3.5 3.5 0 1 1 -2.96 0");
}

.jthdw5gci {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 13.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nicokn1ep {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 3.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sy50-cc1z {
  d: path("M18.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}

.veuek9f-x {
  d: path("M8.5 13.83a3.5 3.5 0 1 1 -2.96 0");
}
</style><g class="nrj6p8qat"><path class="nicokn1ep"/><path class="gebq_v7-y"/><path class="jthdw5gci"/><path class="euogk39-q"/><path class="bpiqilekb"/><path class="gzq1vrb2e"/><path class="veuek9f-x"/><path class="sy50-cc1z"/></g>`,
		"fallback": "iconmind:agent-team-duotone-regular",
	});
}

export default Component;
