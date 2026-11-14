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

.opij3ccqp {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-9 2.75H10a1.25 1.25 0 0 0-1.25 1.25v1.25A1.25 1.25 0 0 1 7.5 15a1.25 1.25 0 0 1 1.25 1.25v1.25A1.25 1.25 0 0 0 10 18.75h.5m3-7.5h.5a1.25 1.25 0 0 1 1.25 1.25v1.25A1.25 1.25 0 0 0 16.5 15a1.25 1.25 0 0 0-1.25 1.25v1.25A1.25 1.25 0 0 1 14 18.75h-.5");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="opij3ccqp"/></g>`,
		"fallback": "uix:graphql-schema",
	});
}

export default Component;
