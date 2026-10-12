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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
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

.ijpat_b_f {
  d: path("M7.75 2.75v18.5m8.5-18.5v18.5m-12.5-13h4m-4 3.75h4m-4 3.75h4m8.5-7.5h4m-4 3.75h4m-4 3.75h4");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="ijpat_b_f"/></g>`,
		"fallback": "iconoven:film-leader",
	});
}

export default Component;
