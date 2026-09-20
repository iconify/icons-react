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
		"content": `<style>.c6v5n0q2l {
  fill: currentColor;
  d: path("M6 4h12v11l-6 6 -6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e70mzkkad {
  d: path("m6 9 3 3h6l3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.plts5tbsc {
  d: path("M6 4h12v11l-6 6 -6 -6Z");
}

.ricsl-blc {
  d: path("M12 12v9");
}
</style><g class="nrj6p8qat"><path class="c6v5n0q2l"/><path class="plts5tbsc"/><path class="e70mzkkad"/><path class="ricsl-blc"/></g>`,
		"fallback": "iconmind:ice-duotone-regular",
	});
}

export default Component;
