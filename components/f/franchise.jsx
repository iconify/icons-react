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
		"content": `<style>.boxpbw4em {
  d: path("M9 4v5m6-5v5m-5 12v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5");
}

.e_t_2-qkp {
  width: 18px;
  height: 5px;
  x: 3px;
  y: 4px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rxn5a_bjj {
  width: 15px;
  height: 12px;
  x: 4.5px;
  y: 9px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="rxn5a_bjj"/><rect class="e_t_2-qkp"/><path class="boxpbw4em"/></g>`,
		"fallback": "iconoven:franchise",
	});
}

export default Component;
