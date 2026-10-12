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
		"content": `<style>.bc40i0b_e {
  d: path("M7 13.75v-.5a3.5 3.5 0 0 1 1.5-6a3.6 3.6 0 0 1 7 0a3.5 3.5 0 0 1 1.5 6v.5Zm3 0v-2.5m4 2.5v-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipwiokbkl {
  width: 10px;
  height: 5px;
  x: 7px;
  y: 16.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="bc40i0b_e"/><rect class="ipwiokbkl"/></g>`,
		"fallback": "iconoven:chef-hat",
	});
}

export default Component;
