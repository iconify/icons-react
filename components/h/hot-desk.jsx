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
		"content": `<style>.gekshtb4f {
  d: path("M6.5 8L8 6.5L9.5 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ohvl64vuw {
  d: path("M14.5 5L16 6.5L17.5 5m-2.036 3.5A4 4 0 0 1 8 6.5");
}

.vyx5oub3x {
  d: path("M2.5 13.5h19M5 13.5v7m14-7v7M8.536 4.5A4 4 0 0 1 16 6.5");
}
</style><g class="hntgybcog"><path class="vyx5oub3x"/><path class="ohvl64vuw"/><path class="gekshtb4f"/></g>`,
		"fallback": "uix:hot-desk",
	});
}

export default Component;
