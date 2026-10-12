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
		"content": `<style>.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lv_qlocdw {
  d: path("M7.25 5.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5m9.5 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5M7.25 15a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5m9.5 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5M12 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5");
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="lv_qlocdw"/></g>`,
		"fallback": "iconoven:bubble-wrap",
	});
}

export default Component;
