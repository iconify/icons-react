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
		"content": `<style>.j7s0b5bvf {
  d: path("M15 13.5v5m-2.5 0 5 -5");
}

.o5dmv_b0u {
  d: path("M9 11.5v5m-2.5 0 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="s0phu2bbs"><path class="uweslxo3x"/><path class="o5dmv_b0u"/><path class="j7s0b5bvf"/></g>`,
		"fallback": "iconmind:ice-warning-outline-bold",
	});
}

export default Component;
