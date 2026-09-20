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
		"content": `<style>.ik6cgdc2x {
  d: path("m8.5 12 2.5 2.5 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pev_t0bpq {
  d: path("M7.5 4H5v16h2.5");
}

.vdp61xcuu {
  d: path("M16.5 4H19v16h-2.5");
}
</style><g class="nrj6p8qat"><path class="pev_t0bpq"/><path class="vdp61xcuu"/><path class="ik6cgdc2x"/></g>`,
		"fallback": "iconmind:assert-check-outline-regular",
	});
}

export default Component;
