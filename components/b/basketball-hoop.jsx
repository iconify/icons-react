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

.myopu_b_g {
  width: 17.5px;
  height: 9.5px;
  x: 3.25px;
  y: 2.75px;
  rx: 1.5px;
}

.nbr5cub3t {
  d: path("M9.25 12.25v-4.5h5.5v4.5m-7.25 0l1.5 8.5h6l1.5-8.5m-6 0l4 8.5m-1-8.5l-4 8.5");
}
</style><g class="hntgybcog"><rect class="myopu_b_g"/><path class="nbr5cub3t"/></g>`,
		"fallback": "iconoven:basketball-hoop",
	});
}

export default Component;
