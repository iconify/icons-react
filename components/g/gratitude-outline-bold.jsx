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
		"content": `<style>.f2w6xorcc {
  d: path("M6 7a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ym8p8xb-h {
  d: path("M20 13a8 8 0 0 1 -16 0");
}
</style><g class="s0phu2bbs"><path class="ym8p8xb-h"/><path class="f2w6xorcc"/></g>`,
		"fallback": "iconmind:gratitude-outline-bold",
	});
}

export default Component;
