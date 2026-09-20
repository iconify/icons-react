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
		"content": `<style>.f_zn7ubyv {
  d: path("M13 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.n4avueb2x {
  d: path("M6 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n8wwq96fg {
  d: path("M14 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lo7kp72nh"/><path class="f_zn7ubyv"/><path class="n8wwq96fg"/><path class="n4avueb2x"/></g>`,
		"fallback": "iconmind:gaussian-splat-outline-regular",
	});
}

export default Component;
