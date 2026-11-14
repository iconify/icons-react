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

.jsxndkb6g {
  d: path("m20 12l1.5 1.5L20 15");
}

.ufvyl3eqx {
  d: path("M21 10V9a2 2 0 0 0-2-2h-7.5l-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2m-9-3.5h9.5");
}
</style><g class="hntgybcog"><path class="ufvyl3eqx"/><path class="jsxndkb6g"/></g>`,
		"fallback": "uix:folder-output",
	});
}

export default Component;
