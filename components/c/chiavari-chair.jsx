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
		"content": `<style>.gc9g4jqtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5C8 6 8.5 10 8.5 13.5l-1.5 8m1.5-8h9m-.5 0l1 8m-10-4h9.5");
}
</style><path class="gc9g4jqtt"/>`,
		"fallback": "uix:chiavari-chair",
	});
}

export default Component;
