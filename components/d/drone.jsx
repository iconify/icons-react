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

.v500xbc1j {
  width: 5px;
  height: 5px;
  x: 9.5px;
  y: 9.5px;
  rx: 1.5px;
}

.vycg19baf {
  d: path("m7 7l3 3m7-3l-3 3m-7 7l3-3m7 3l-3-3M2.75 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-13.5 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><rect class="v500xbc1j"/><path class="vycg19baf"/></g>`,
		"fallback": "iconoven:drone",
	});
}

export default Component;
