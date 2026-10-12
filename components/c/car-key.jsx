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
		"content": `<style>.du7tf3bce {
  width: 8.5px;
  height: 11px;
  x: 7.75px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_sgb4nim {
  d: path("M10 6.75h4m-4 3h4m-2 4v7.5M12 17h2.25M12 20h2.25");
}
</style><g class="hntgybcog"><rect class="du7tf3bce"/><path class="q_sgb4nim"/></g>`,
		"fallback": "iconoven:car-key",
	});
}

export default Component;
