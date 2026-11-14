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
		"content": `<style>.gz597qb0z {
  d: path("M7.75 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ryctvebqq {
  d: path("M9 7.5c-3 1-4.5 4-4.5 7H10l-1 6M6.5 9.25l4.75 2.25");
}

.vljpbwblw {
  d: path("M2.5 20.5h19v-11a1 1 0 0 0-1-1h-5.25a1 1 0 0 0-1 1v11");
}
</style><g class="hntgybcog"><path class="gz597qb0z"/><path class="ryctvebqq"/><path class="vljpbwblw"/></g>`,
		"fallback": "uix:crouch",
	});
}

export default Component;
