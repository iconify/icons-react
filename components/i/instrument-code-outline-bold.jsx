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

.g8bjrhv1v {
  d: path("M7 12a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="g8bjrhv1v"/></g>`,
		"fallback": "iconmind:instrument-code-outline-bold",
	});
}

export default Component;
