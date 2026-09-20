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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}

.x1_r36phd {
  d: path("M9 12h6");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="nrj6p8qat"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="o40l0bbgl"/><path class="x1_r36phd"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:batch-request-outline-regular",
	});
}

export default Component;
