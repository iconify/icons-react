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

.k3db48bkp {
  d: path("M6.25 12h6.5m2-1l2 2l2-2");
}

.ppkmu3b3c {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="ppkmu3b3c"/><path class="k3db48bkp"/></g>`,
		"fallback": "iconoven:combobox",
	});
}

export default Component;
