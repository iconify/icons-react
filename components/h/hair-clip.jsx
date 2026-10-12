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

.t32crsb7z {
  d: path("M6.5 9.75v4.75c0 2 1 3.5 2.5 4.5m1.5-9.25v8m3-8v8m4-8v4.75c0 2-1 3.5-2.5 4.5");
}

.t9gphzb7u {
  width: 14.5px;
  height: 4.5px;
  x: 4.75px;
  y: 4.5px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="t9gphzb7u"/><path class="t32crsb7z"/></g>`,
		"fallback": "iconoven:hair-clip",
	});
}

export default Component;
