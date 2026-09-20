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

.e8t0a9beq {
  d: path("M12 7v4l-4 4");
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

.zn6_kf4ff {
  d: path("m12 11 4 4");
}
</style><g class="nrj6p8qat"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="e8t0a9beq"/><path class="zn6_kf4ff"/></g>`,
		"fallback": "iconmind:coverage-branch-outline-regular",
	});
}

export default Component;
