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
		"content": `<style>.byg9qhb1x {
  d: path("M3 13a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.e-hz86dqn {
  d: path("m10 13 4 -4");
}

.g9v3j3igs {
  d: path("M22 6v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrb5igeqn {
  d: path("M19 4v4");
}

.xlsprdnsf {
  d: path("M9 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="byg9qhb1x"/><path class="e-hz86dqn"/><path class="xlsprdnsf"/><path class="rrb5igeqn"/><path class="g9v3j3igs"/></g>`,
		"fallback": "iconmind:benchmark-code-outline-regular",
	});
}

export default Component;
