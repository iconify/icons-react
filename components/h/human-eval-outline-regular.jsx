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
		"content": `<style>.cpvmwnddk {
  d: path("M2 19a5 5 0 0 1 10 0");
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zt8wecbdr {
  d: path("m13 14 3 3 5 -5");
}
</style><g class="nrj6p8qat"><path class="myekf3bzc"/><path class="cpvmwnddk"/><path class="zt8wecbdr"/></g>`,
		"fallback": "iconmind:human-eval-outline-regular",
	});
}

export default Component;
