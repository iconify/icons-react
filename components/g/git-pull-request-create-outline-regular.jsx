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
		"content": `<style>.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.k5nz3bcao {
  d: path("M6 7.5v9");
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.l_raegbyq {
  d: path("M15.5 6.5h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.w7fxcjk_f {
  d: path("M18 4v5");
}
</style><g class="nrj6p8qat"><path class="kn0tcm93r"/><path class="k5nz3bcao"/><path class="fg8libqda"/><path class="pw61xnbei"/><path class="w7fxcjk_f"/><path class="l_raegbyq"/></g>`,
		"fallback": "iconmind:git-pull-request-create-outline-regular",
	});
}

export default Component;
