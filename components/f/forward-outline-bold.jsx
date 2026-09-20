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
		"content": `<style>.f8wj1yoym {
  d: path("M21 9H7v11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1ev1ubdz {
  d: path("m16 4 5 5 -5 5");
}
</style><g class="s0phu2bbs"><path class="s1ev1ubdz"/><path class="f8wj1yoym"/></g>`,
		"fallback": "iconmind:forward-outline-bold",
	});
}

export default Component;
