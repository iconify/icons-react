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
		"content": `<style>.khupvdbel {
  d: path("M20 4H10v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x7qdjyb5k {
  d: path("m5 15 5 5 5 -5");
}
</style><g class="s0phu2bbs"><path class="khupvdbel"/><path class="x7qdjyb5k"/></g>`,
		"fallback": "iconmind:corner-left-down-outline-bold",
	});
}

export default Component;
