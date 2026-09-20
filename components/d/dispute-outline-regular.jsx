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
		"content": `<style>.jlfjgzbqx {
  d: path("M9 9h6");
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x1_r36phd {
  d: path("M9 12h6");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}

.z_b_jl_3m {
  d: path("m9.5 14 5 -5");
}
</style><g class="nrj6p8qat"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="jlfjgzbqx"/><path class="x1_r36phd"/><path class="z_b_jl_3m"/></g>`,
		"fallback": "iconmind:dispute-outline-regular",
	});
}

export default Component;
