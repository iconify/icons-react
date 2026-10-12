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
		"content": `<style>.bc80i9bna {
  width: 7.75px;
  height: 8.25px;
  x: 2.75px;
  y: 13px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m86lj7xps {
  width: 7.75px;
  height: 8.25px;
  x: 13.5px;
  y: 13px;
  rx: 1.5px;
}

.ne3z-tb5z {
  width: 7.75px;
  height: 7.25px;
  x: 8.125px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="bc80i9bna"/><rect class="m86lj7xps"/><rect class="ne3z-tb5z"/></g>`,
		"fallback": "iconoven:building-blocks",
	});
}

export default Component;
