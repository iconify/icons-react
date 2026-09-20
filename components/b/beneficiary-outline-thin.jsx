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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u7m7z6ojw {
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wuk2mlziz {
  d: path("M7 19h10");
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}
</style><g class="hntgybcog"><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="u7m7z6ojw"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:beneficiary-outline-thin",
	});
}

export default Component;
