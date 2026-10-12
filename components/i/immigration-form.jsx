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

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}

.yk84y9b5a {
  d: path("M8.25 6.75h1.5m2 0h4M8.25 10h1.5m2 0h4m-7.5 6h7M13 13.75L15.25 16L13 18.25");
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="yk84y9b5a"/></g>`,
		"fallback": "iconoven:immigration-form",
	});
}

export default Component;
