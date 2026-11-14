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
		"content": `<style>.g2z0nkbdi {
  d: path("M5 8h14m-3-3l3 3l-3 3");
}

.m6-qeyb5m {
  d: path("M2.5 17h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w025e0bqq {
  fill: currentColor;
  d: path("M4 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="m6-qeyb5m"/><path class="w025e0bqq"/><path class="g2z0nkbdi"/></g>`,
		"fallback": "uix-sharp:electron-flow",
	});
}

export default Component;
