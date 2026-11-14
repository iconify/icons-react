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
		"content": `<style>.n3jfhzb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3h13.75A2.625 2.625 0 0 1 21.5 5.625v4.75A2.625 2.625 0 0 1 18.875 13H5.125A2.625 2.625 0 0 1 2.5 10.375v-4.75A2.625 2.625 0 0 1 5.125 3M12 13v8.5M7.25 13l3.5-10M12 13l3.5-10m1.25 10l3.5-10");
}
</style><path class="n3jfhzb6g"/>`,
		"fallback": "uix:braking-board",
	});
}

export default Component;
