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
		"content": `<style>.a-v3knb-a {
  d: path("M3 14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qgw5bw59f {
  d: path("M10 16.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z6y0gfbug {
  d: path("M7 4.5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2V7a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="z6y0gfbug"/><path class="a-v3knb-a"/><path class="qgw5bw59f"/></g>`,
		"fallback": "iconmind:cash-register-outline-regular",
	});
}

export default Component;
