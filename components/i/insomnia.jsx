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

.qpkv0yjcj {
  d: path("M2.75 16.5c2-3 4.6-4.5 7.5-4.5s5.5 1.5 7.5 4.5c-2 3-4.6 4.5-7.5 4.5s-5.5-1.5-7.5-4.5");
}

.xzzs_oboz {
  d: path("M10.25 14.75a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5m6.4-11.95a3.75 3.75 0 1 0 4.19 4.78a3.25 3.25 0 0 1-4.19-4.78");
}
</style><g class="hntgybcog"><path class="qpkv0yjcj"/><path class="xzzs_oboz"/></g>`,
		"fallback": "iconoven:insomnia",
	});
}

export default Component;
