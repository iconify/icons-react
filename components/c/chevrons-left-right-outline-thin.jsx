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
		"content": `<style>.h-_fm4bbo {
  d: path("m15 7 5 5 -5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6jbysbtk {
  d: path("m9 7 -5 5 5 5");
}
</style><g class="hntgybcog"><path class="s6jbysbtk"/><path class="h-_fm4bbo"/></g>`,
		"fallback": "iconmind:chevrons-left-right-outline-thin",
	});
}

export default Component;
