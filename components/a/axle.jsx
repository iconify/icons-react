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

.k7v5uwbhc {
  width: 4px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 1.5px;
}

.l_han5bst {
  width: 4px;
  height: 14.5px;
  x: 17.25px;
  y: 4.75px;
  rx: 1.5px;
}

.o-5_s5npo {
  d: path("M2.75 9h4m-4 6h4m10.5-6h4m-4 6h4m-14.5-3h10.5");
}
</style><g class="hntgybcog"><rect class="k7v5uwbhc"/><rect class="l_han5bst"/><path class="o-5_s5npo"/></g>`,
		"fallback": "iconoven:axle",
	});
}

export default Component;
