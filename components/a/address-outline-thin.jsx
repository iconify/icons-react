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
		"content": `<style>.a3fwgxb1c {
  d: path("M9 11.5h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}
</style><g class="hntgybcog"><path class="qad3kqbgr"/><path class="o40l0bbgl"/><path class="a3fwgxb1c"/></g>`,
		"fallback": "iconmind:address-outline-thin",
	});
}

export default Component;
