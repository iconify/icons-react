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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdgrh3byr {
  d: path("M2.5 13Q13 13 21 9q-3.25 8-8 10H2.5");
}

.maifqw57t {
  d: path("M12 12.5V6h6.25Q21 6 21 9");
}
</style><g class="hntgybcog"><path class="jdgrh3byr"/><path class="maifqw57t"/></g>`,
		"fallback": "uix:bow-pulpit",
	});
}

export default Component;
