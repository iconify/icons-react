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
		"content": `<style>.h69bgqbut {
  d: path("M12.5 9.5v11h9v-14M7 3.5v6m8.5 4.5h3m-3 3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-49ugpbq {
  d: path("M5.5 3.5h13a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="o-49ugpbq"/><path class="h69bgqbut"/></g>`,
		"fallback": "uix:blueprint-roll",
	});
}

export default Component;
