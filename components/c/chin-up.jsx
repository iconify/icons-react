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
		"content": `<style>.nd3j3a5ya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2.5 6l2 5h7l2-5m-8 5v5m5-5v5");
}
</style><path class="nd3j3a5ya"/>`,
		"fallback": "uix:chin-up",
	});
}

export default Component;
