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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r1kul9sai {
  d: path("M2 11h13");
}

.s6pz8xbpf {
  d: path("m15 10 6 -6");
}

.uuszqcc8s {
  d: path("M2 8a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x_i4bic-b {
  d: path("m17 8 4 -4v5");
}
</style><g class="nrj6p8qat"><path class="uuszqcc8s"/><path class="r1kul9sai"/><path class="x_i4bic-b"/><path class="s6pz8xbpf"/></g>`,
		"fallback": "iconmind:external-table-outline-regular",
	});
}

export default Component;
