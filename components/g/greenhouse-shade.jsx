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
		"content": `<style>.t83h6ubaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-9a9 9 0 0 1 18 0v9Zm.5-11.5L15 21M9.5 3.5L21 15m-.5-5.5L9 21m5.5-17.5L3 15");
}
</style><path class="t83h6ubaj"/>`,
		"fallback": "uix:greenhouse-shade",
	});
}

export default Component;
