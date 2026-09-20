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
		"content": `<style>.a218-cpca {
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
}

.h_q78bcjk {
  fill: currentColor;
  d: path("M10 10h4l-4 4h4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n7c_b1bsn {
  fill: currentColor;
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
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

.za9x73s_d {
  d: path("M10 10h4l-4 4h4Z");
}
</style><g class="nrj6p8qat"><path class="n7c_b1bsn"/><path class="h_q78bcjk"/><path class="a218-cpca"/><path class="za9x73s_d"/></g>`,
		"fallback": "iconmind:grace-period-duotone-regular",
	});
}

export default Component;
