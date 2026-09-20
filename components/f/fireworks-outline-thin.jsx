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

.hsrzt0bgt {
  d: path("m10 8 3 -3");
}

.lnxxf4b_g {
  d: path("m19 19 2 2");
}

.o5ex3bb1u {
  d: path("M16 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.u6ltz0bsa {
  d: path("M8 7V4");
}

.ux6apgnet {
  d: path("M7 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.z5j-qdr3m {
  d: path("M6 8 3 5");
}
</style><g class="hntgybcog"><path class="ux6apgnet"/><path class="u6ltz0bsa"/><path class="z5j-qdr3m"/><path class="hsrzt0bgt"/><path class="o5ex3bb1u"/><path class="lnxxf4b_g"/></g>`,
		"fallback": "iconmind:fireworks-outline-thin",
	});
}

export default Component;
