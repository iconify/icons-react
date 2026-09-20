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
		"content": `<style>.pnu4jvbcb {
  d: path("m13 4 8 8 -8 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.te2cn0btr {
  d: path("m4 4 8 8 -8 8");
}
</style><g class="s0phu2bbs"><path class="te2cn0btr"/><path class="pnu4jvbcb"/></g>`,
		"fallback": "iconmind:chevrons-right-outline-bold",
	});
}

export default Component;
