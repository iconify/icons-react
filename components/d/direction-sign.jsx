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

.tduyi_bww {
  d: path("M7.5 11.25v-1.5a2 2 0 0 1 2-2h7M14.25 5.5l2.25 2.25L14.25 10M12 14.25v7");
}

.yw5d9xb9r {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 3.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="yw5d9xb9r"/><path class="tduyi_bww"/></g>`,
		"fallback": "iconoven:direction-sign",
	});
}

export default Component;
