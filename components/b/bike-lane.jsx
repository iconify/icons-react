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

.oe1h5-b2q {
  d: path("m7.5 15.5l3-5H15l1.5 5");
}

.pbkj_abak {
  d: path("M2.5 2.5h19m-19 19h19M2.5 7h19m-17 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="pbkj_abak"/><path class="oe1h5-b2q"/></g>`,
		"fallback": "uix:bike-lane",
	});
}

export default Component;
