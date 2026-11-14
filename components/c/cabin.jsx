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

.nt_imwdob {
  d: path("M10 21.5v-7h4v7m-11-7h7m4 0h7M3 18h7m4 0h7");
}

.omx1rt4lq {
  d: path("m3 11l9-7.5l9 7.5M4.5 11v10.5h15V11");
}
</style><g class="hntgybcog"><path class="omx1rt4lq"/><path class="nt_imwdob"/></g>`,
		"fallback": "uix:cabin",
	});
}

export default Component;
