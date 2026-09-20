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
		"content": `<style>.ebuv7_btt {
  d: path("M7 17v3l3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_lkvk_2h {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.x5dchcu_y {
  d: path("M8 9a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}
</style><g class="hntgybcog"><path class="x_lkvk_2h"/><path class="ebuv7_btt"/><path class="x5dchcu_y"/></g>`,
		"fallback": "iconmind:chat-heart-outline-thin",
	});
}

export default Component;
