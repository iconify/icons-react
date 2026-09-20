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

.hqkel0bnd {
  d: path("M22 3h-6v18");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.tqteed1fm {
  d: path("M2 3h6v18");
}

.uaurn5bqf {
  d: path("m8 17 2 -2 2 2 2 -2 2 2");
}
</style><g class="hntgybcog"><path class="tqteed1fm"/><path class="hqkel0bnd"/><path class="uaurn5bqf"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:canyon-outline-thin",
	});
}

export default Component;
