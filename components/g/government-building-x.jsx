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
		"content": `<style>.o0ao8vr8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9a4.5 4.5 0 0 1 9 0M12 2.5v2M3 9h18M3 21h9.25M6 12v6m4-6v6m5.5-2.5l5 5m0-5l-5 5");
}
</style><path class="o0ao8vr8g"/>`,
		"fallback": "uix:government-building-x",
	});
}

export default Component;
