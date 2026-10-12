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

.ipi-ykcim {
  width: 11.5px;
  height: 3.25px;
  x: 6.25px;
  y: 2.75px;
  rx: 1.5px;
}

.jgt11acdd {
  width: 13.5px;
  height: 12.25px;
  x: 5.25px;
  y: 9px;
  rx: 3px;
}

.v-u_t2bfn {
  d: path("M8.75 13.5h6.5m-6.5 3.25h4");
}
</style><g class="hntgybcog"><rect class="ipi-ykcim"/><rect class="jgt11acdd"/><path class="v-u_t2bfn"/></g>`,
		"fallback": "iconoven:baby-food-jar-clock",
	});
}

export default Component;
