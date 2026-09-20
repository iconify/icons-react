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
		"content": `<style>.dqnj9qzwg {
  d: path("M18 9a3 3 0 0 1 0 6");
}

.lu2digfbp {
  d: path("M3 6a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="lu2digfbp"/><path class="dqnj9qzwg"/></g>`,
		"fallback": "iconmind:extension-outline-bold",
	});
}

export default Component;
