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
		"content": `<style>.bzecsub_a {
  d: path("M8 12h12");
}

.c_pe6njtz {
  d: path("M4 7v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u8aszkb6i {
  d: path("m16 8 4 4 -4 4");
}
</style><g class="hntgybcog"><path class="c_pe6njtz"/><path class="bzecsub_a"/><path class="u8aszkb6i"/></g>`,
		"fallback": "iconmind:arrow-right-from-line-outline-thin",
	});
}

export default Component;
