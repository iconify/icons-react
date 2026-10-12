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
		"content": `<style>.g-vfy0b3u {
  width: 16.5px;
  height: 3.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-4gojuzi {
  d: path("M12 6.25v3L15 11l-6 3.5l6 3.5l-3 1.75");
}
</style><g class="hntgybcog"><rect class="g-vfy0b3u"/><path class="m-4gojuzi"/></g>`,
		"fallback": "iconoven:corkscrew",
	});
}

export default Component;
