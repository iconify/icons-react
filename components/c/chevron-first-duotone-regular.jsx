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
		"content": `<style>.l-dfvmblg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m19 5 -7 7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nxab-kxlu {
  d: path("M3 5v14");
}

.nxvwkbbvl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yr0a_60jr {
  d: path("m19 5 -7 7 7 7");
}
</style><g class="nrj6p8qat"><path class="nxvwkbbvl"/><path class="l-dfvmblg"/><path class="nxab-kxlu"/><path class="yr0a_60jr"/></g>`,
		"fallback": "iconmind:chevron-first-duotone-regular",
	});
}

export default Component;
