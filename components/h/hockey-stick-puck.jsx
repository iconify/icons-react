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
		"content": `<style>.hd82dc2kw {
  d: path("M14 16.75v2.5a3.5 1.5 0 0 0 7 0v-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oc736ybxq {
  d: path("m16 3.25l-7.5 13q-1.5 3-4.5 3h-.5a1.5 1.5 0 0 1-1.5-1.5m12-1a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="oc736ybxq"/><path class="hd82dc2kw"/></g>`,
		"fallback": "uix:hockey-stick-puck",
	});
}

export default Component;
