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
		"content": `<style>.dgslsgbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21V9m14 12V9M2.5 9q9.5-5 19 0M5 12.5h14M12 7v5.5");
}
</style><path class="dgslsgbfm"/>`,
		"fallback": "uix:chinatown-gate",
	});
}

export default Component;
