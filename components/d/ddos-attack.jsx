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
		"content": `<style>.eiy16db8k {
  width: 7.5px;
  height: 16.5px;
  x: 13.75px;
  y: 3.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-uz4s06m {
  d: path("M16.25 8h2.5m-2.5 4h2.5m-2.5 4h2.5m-16-9.5h7m-2.25-2l2.25 2l-2.25 2M2.75 12h7M7.5 10l2.25 2l-2.25 2m-4.75 3.5h7m-2.25-2l2.25 2l-2.25 2");
}
</style><g class="hntgybcog"><rect class="eiy16db8k"/><path class="m-uz4s06m"/></g>`,
		"fallback": "iconoven:ddos-attack",
	});
}

export default Component;
