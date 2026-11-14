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
		"content": `<style>.aubg04tpy {
  d: path("M14.072 15.5H2.5v-4L6 10l2.5-4.5h7L19 10l2.5 1.5v.528");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy-br-cgr {
  d: path("M4.75 15.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m11.469-2.111q-.218.08-.414.203q-.197.123-.364.284t-.298.352t-.22.405M14.5 21.5V19l5-5l2.5 2.5l-5 5Z");
}
</style><g class="hntgybcog"><path class="aubg04tpy"/><path class="oy-br-cgr"/></g>`,
		"fallback": "uix:car-edit",
	});
}

export default Component;
