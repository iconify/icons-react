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
		"content": `<style>.heab_yqwk {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 14px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ln6bb6kno {
  d: path("m16.25 14l-.75-4.5a2 2 0 0 1 2-2.25h.75A2.25 2.25 0 0 1 20.5 9.5V14m-10.25 2.5l2-7");
}

.snuqc64bb {
  cx: 5.75px;
  cy: 12px;
  r: 2px;
}
</style><g class="hntgybcog"><rect class="heab_yqwk"/><circle class="snuqc64bb"/><path class="ln6bb6kno"/></g>`,
		"fallback": "iconoven:hand-plane",
	});
}

export default Component;
