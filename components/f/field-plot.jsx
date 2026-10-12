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
		"content": `<style>.bpwu42bvg {
  d: path("M2.75 10.5h18.5m-9.75 0v10.75m3-18.5v7.75M6 2.75v7.75m3.25-7.75v7.75m5.5 3.25h6.5m-6.5 3.75h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hoi44xq4a {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="hoi44xq4a"/><path class="bpwu42bvg"/></g>`,
		"fallback": "iconoven:field-plot",
	});
}

export default Component;
