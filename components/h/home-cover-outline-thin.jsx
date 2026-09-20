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

.dqv6w4kbm {
  d: path("m8 16.5 4 -4 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkw9k9b1p {
  d: path("M9 16.5V21h6v-4.5");
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}
</style><g class="hntgybcog"><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="dqv6w4kbm"/><path class="jkw9k9b1p"/></g>`,
		"fallback": "iconmind:home-cover-outline-thin",
	});
}

export default Component;
