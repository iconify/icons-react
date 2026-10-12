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

.lej3j4uzu {
  width: 14.5px;
  height: 14.5px;
  x: 4.75px;
  y: 6.75px;
  rx: 3.5px;
}

.qbaybhp4z {
  d: path("M16 6.75v-4M12 18.5s-3.5-3-3.5-5.75a3.5 3.5 0 0 1 7 0c0 2.75-3.5 5.75-3.5 5.75");
}
</style><g class="hntgybcog"><rect class="lej3j4uzu"/><path class="qbaybhp4z"/></g>`,
		"fallback": "iconoven:gps-unit",
	});
}

export default Component;
