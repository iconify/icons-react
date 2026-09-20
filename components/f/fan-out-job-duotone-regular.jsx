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
		"content": `<style>.b-6-k_bva {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 12 3 3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f0erpifmh {
  d: path("M7 12h3l3 -3h3");
}

.gscgthrgv {
  d: path("m10 12 3 3h3");
}

.k_mqd31au {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 12h3l3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n5v54kp1e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}
</style><g class="nrj6p8qat"><path class="n5v54kp1e"/><path class="k_mqd31au"/><path class="b-6-k_bva"/><path class="ri2m-q_tv"/><path class="f0erpifmh"/><path class="gscgthrgv"/></g>`,
		"fallback": "iconmind:fan-out-job-duotone-regular",
	});
}

export default Component;
