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
		"content": `<style>.mnw0h9yvg {
  fill: currentColor;
  d: path("M9 13a5 5 0 0 1 7 -5 5 5 0 0 1 -7 5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqr7qbc2i {
  d: path("M9 13a5 5 0 0 1 7 -5 5 5 0 0 1 -7 5");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="mnw0h9yvg"/><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="oqr7qbc2i"/></g>`,
		"fallback": "iconmind:air-quality-duotone-regular",
	});
}

export default Component;
