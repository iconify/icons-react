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
		"content": `<style>.bcnz89gqx {
  fill: currentColor;
  d: path("M18 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fadcahsis {
  d: path("M18 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sy2uhn-ye {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13.96 6.66a7 7 0 1 1 -5.92 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z3ru5llvg {
  d: path("M13.96 6.66a7 7 0 1 1 -5.92 0");
}
</style><g class="nrj6p8qat"><path class="bcnz89gqx"/><path class="sy2uhn-ye"/><path class="z3ru5llvg"/><path class="fadcahsis"/></g>`,
		"fallback": "iconmind:agent-unread-duotone-regular",
	});
}

export default Component;
