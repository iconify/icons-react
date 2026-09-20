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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_-097bpf {
  d: path("M4 20a8 8 0 0 1 16 0");
}

.qn419xb2f {
  d: path("m6 11 2 2a2 2 0 1 1 -4 0Z");
}

.rdx5t34om {
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="uk0rveqaj"/><path class="rdx5t34om"/><path class="q_-097bpf"/><path class="qn419xb2f"/></g>`,
		"fallback": "iconmind:cry-outline-thin",
	});
}

export default Component;
