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

.m-uxk6b8o {
  d: path("m7 11l5 5.5l5-5.5m-2.541-8.176a9.5 9.5 0 0 1 6.717 6.717m0 4.918a9.5 9.5 0 0 1-6.717 6.717m-4.918 0a9.5 9.5 0 0 1-6.717-6.717m0-4.918a9.5 9.5 0 0 1 6.717-6.717");
}

.z2fv4m0ss {
  d: path("M7 11a5 4.5 0 0 1 10 0a1.625 1 0 0 1-3.25 0a1.75 1 0 0 1-3.5 0A1.625 1 0 0 1 7 11");
}
</style><g class="hntgybcog"><path class="z2fv4m0ss"/><path class="m-uxk6b8o"/></g>`,
		"fallback": "uix:genre-battle-royale",
	});
}

export default Component;
