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
		"content": `<style>.bq4e1jb8b {
  d: path("m7 10 3 3 7 -7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o8od38cnm {
  d: path("M4 18h16");
}
</style><g class="hntgybcog"><path class="bq4e1jb8b"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:assertion-outline-thin",
	});
}

export default Component;
