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
		"content": `<style>.cjusxzm1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5h9.2M6.5 5v12.5M9.75 9v8.5M13 13v4.5m2.5 4c0-4.5 2-6 6-6q0 6-6 6m0 0l3-3");
}
</style><path class="cjusxzm1m"/>`,
		"fallback": "uix:emissions-chart",
	});
}

export default Component;
