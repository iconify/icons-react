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
		"content": `<style>.cajt03bfr {
  d: path("m4 20 5 -5");
}

.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.g0r36obgd {
  d: path("m4 4 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w4mlg7f2w {
  d: path("m20 4 -5 5");
}

.wsohn5btf {
  d: path("m20 20 -5 -5");
}
</style><g class="nrj6p8qat"><path class="g0r36obgd"/><path class="w4mlg7f2w"/><path class="cajt03bfr"/><path class="wsohn5btf"/><path class="enrpg0aoq"/></g>`,
		"fallback": "iconmind:attention-outline-regular",
	});
}

export default Component;
