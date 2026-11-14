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
		"content": `<style>.fm1ow8__f {
  d: path("m11.964 10.268l5.304-5.304a1.25 1.25 0 0 1 1.768 0a1.25 1.25 0 0 1 0 1.768l-5.304 5.304a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768M17.5 3.5l3 3M6.25 14.25l3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qyoaohkvq {
  d: path("M2.5 16a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="qyoaohkvq"/><path class="fm1ow8__f"/></g>`,
		"fallback": "uix:bassist",
	});
}

export default Component;
