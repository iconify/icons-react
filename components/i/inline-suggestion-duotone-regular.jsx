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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.etqzyebuj {
  d: path("M13 12h2.5");
}

.jt6itcb1h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 12h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mubtddccx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18.5 12H21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p628olg1t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pesxdybze {
  d: path("M3 12h7");
}

.s0wwcab9o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tb33trnmj {
  d: path("M3 18h5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.y7_y8yq8z {
  d: path("M18.5 12H21");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="s0wwcab9o"/><path class="jt6itcb1h"/><path class="mubtddccx"/><path class="p628olg1t"/><path class="xgrfb-bqu"/><path class="pesxdybze"/><path class="etqzyebuj"/><path class="y7_y8yq8z"/><path class="tb33trnmj"/></g>`,
		"fallback": "iconmind:inline-suggestion-duotone-regular",
	});
}

export default Component;
