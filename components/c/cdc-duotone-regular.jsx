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
		"content": `<style>.bonttq6md {
  d: path("M2 9h8");
}

.etqzyebuj {
  d: path("M13 12h2.5");
}

.i55cujbki {
  d: path("M2 14h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pquf1ccxc {
  d: path("M2 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.siqrysbwb {
  fill: currentColor;
  d: path("M2 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wn519caci {
  d: path("m19 9 3 3 -3 3");
}

.yaetm9cyz {
  d: path("M18 12h2.5");
}
</style><g class="nrj6p8qat"><path class="siqrysbwb"/><path class="pquf1ccxc"/><path class="bonttq6md"/><path class="i55cujbki"/><path class="etqzyebuj"/><path class="yaetm9cyz"/><path class="wn519caci"/></g>`,
		"fallback": "iconmind:cdc-duotone-regular",
	});
}

export default Component;
