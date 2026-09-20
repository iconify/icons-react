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
		"content": `<style>.eig2f9b_m {
  fill: currentColor;
  d: path("M3 14a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ic00xab8f {
  d: path("M4 12a8 8 0 0 1 16 0");
}

.nhcnsbcub {
  fill: currentColor;
  d: path("M17 14a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vf7cpzbkg {
  d: path("M3 14a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.wue-zto0n {
  d: path("M17 14a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="eig2f9b_m"/><path class="nhcnsbcub"/><path class="ic00xab8f"/><path class="vf7cpzbkg"/><path class="wue-zto0n"/></g>`,
		"fallback": "iconmind:headphones-duotone-regular",
	});
}

export default Component;
