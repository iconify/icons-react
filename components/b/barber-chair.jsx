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

.j4ub2qbzv {
  d: path("m6.5 7.25l1.5 6.5h8.75m-7-3.5h6.5m.5 3.5l2 4.25h2.5M12 13.75v7.5m-4 0h8");
}

.lo4ye1bir {
  width: 4px;
  height: 3px;
  x: 4.75px;
  y: 2.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="lo4ye1bir"/><path class="j4ub2qbzv"/></g>`,
		"fallback": "iconoven:barber-chair",
	});
}

export default Component;
