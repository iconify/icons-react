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
		"content": `<style>.e7gdfacbv {
  d: path("M4.25 8.5h6.25v-2h3v2h6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.npqcyqbwz {
  d: path("M5.25 11.5h-2.5m16 0h2.5");
}

.trl5pfpwc {
  width: 13.5px;
  height: 6px;
  x: 5.25px;
  y: 11.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="e7gdfacbv"/><rect class="trl5pfpwc"/><path class="npqcyqbwz"/></g>`,
		"fallback": "iconoven:casserole-dish",
	});
}

export default Component;
