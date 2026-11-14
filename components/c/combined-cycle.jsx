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

.kzd2hac-a {
  d: path("M2.5 16.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 0h3");
}

.zy_x_gbuy {
  d: path("M16 12.75V2.5h3v10.25M6.5 16.5v-2.75m0 2.75l2.25 1.25M6.5 16.5l-2.25 1.25M17.5 16.5v-2.75m0 2.75l2.25 1.25M17.5 16.5l-2.25 1.25");
}
</style><g class="hntgybcog"><path class="kzd2hac-a"/><path class="zy_x_gbuy"/></g>`,
		"fallback": "uix:combined-cycle",
	});
}

export default Component;
